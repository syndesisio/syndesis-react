/*
 * Copyright (C) 2016 Red Hat, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package io.syndesis.connector.salesforce;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.Map;

import org.apache.camel.Exchange;
import org.apache.camel.Message;
import org.apache.camel.Processor;
import org.apache.camel.component.salesforce.SalesforceEndpointConfig;
import org.apache.camel.component.salesforce.api.SalesforceException;
import org.apache.camel.component.salesforce.api.utils.JsonUtils;
import org.apache.camel.util.URISupport;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;

public class AdaptObjectForUpdateProcessor implements Processor {

    private static final ObjectMapper MAPPER = JsonUtils.createObjectMapper();

    @Override
    public void process(final Exchange exchange) throws Exception {
        // parse input json and extract Id field
        final Message in = exchange.getIn();
        final String body = in.getBody(String.class);

        if (body == null) {
            return;
        }

        final ObjectNode node = (ObjectNode) MAPPER.readTree(body);

        final String idPropertyName = determineIdProperty(exchange);

        final JsonNode idProperty = node.remove(idPropertyName);
        if (idProperty == null) {
            exchange.setException(
                new SalesforceException("Missing option value for Id or " + SalesforceEndpointConfig.SOBJECT_EXT_ID_NAME, 404));

            return;
        }

        final String idValue = idProperty.textValue();
        if ("Id".equals(idPropertyName)) {
            in.setHeader(SalesforceEndpointConfig.SOBJECT_ID, idValue);
        } else {
            in.setHeader(SalesforceEndpointConfig.SOBJECT_EXT_ID_VALUE, idValue);
        }

        // base fields are not allowed to be updated
        clearBaseFields(node);

        // update input json
        in.setBody(MAPPER.writeValueAsString(node));
    }

    private String determineIdProperty(final Exchange exchange) throws URISyntaxException {
        final String uri = exchange.getProperty(Exchange.TO_ENDPOINT, String.class);

        final Map<String, Object> endpointParameters = URISupport.parseParameters(URI.create(uri));

        return (String) endpointParameters.getOrDefault(SalesforceEndpointConfig.SOBJECT_EXT_ID_NAME, "Id");
    }

    private static void clearBaseFields(final ObjectNode node) {
        node.remove("attributes");
        node.remove("Id");
        node.remove("IsDeleted");
        node.remove("CreatedDate");
        node.remove("CreatedById");
        node.remove("LastModifiedDate");
        node.remove("LastModifiedById");
        node.remove("SystemModstamp");
        node.remove("LastActivityDate");
    }
}
