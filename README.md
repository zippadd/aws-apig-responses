# aws-apig-responses
[![Build Status](https://travis-ci.org/zippadd/aws-apig-responses.svg?branch=master)](https://travis-ci.org/zippadd/aws-apig-responses)
[![codecov](https://codecov.io/gh/zippadd/aws-apig-responses/branch/master/graph/badge.svg)](https://codecov.io/gh/zippadd/aws-apig-responses)
[![dependencies Status](https://david-dm.org/zippadd/aws-apig-responses/status.svg)](https://david-dm.org/zippadd/aws-apig-responses)
[![devDependencies Status](https://david-dm.org/zippadd/aws-apig-responses/dev-status.svg)](https://david-dm.org/zippadd/aws-apig-responses?type=dev)
[![Greenkeeper badge](https://badges.greenkeeper.io/zippadd/aws-apig-responses.svg)](https://greenkeeper.io/)
[![NSP Status](https://nodesecurity.io/orgs/zippadd/projects/f9639e32-d46e-4e16-9d82-fe4be1ac6f18/badge)](https://nodesecurity.io/orgs/zippadd/projects/f9639e32-d46e-4e16-9d82-fe4be1ac6f18)
[![Inline docs](http://inch-ci.org/github/zippadd/aws-apig-responses.svg?branch=master)](http://inch-ci.org/github/zippadd/aws-apig-responses)

A Error derived object factory designed to provide an easy map to AWS API Gateway error regex.
This is accomplished through prepending the status code (e.g. 404) and pascal code id (e.g. NotFound) to the Error message.

Supports client (e.g. 404), server (e.g. 500), and non errors (e.g. 302) for maximum flexibility.
Utilizes Nodes built-in HTTP module for status codes and descriptions.

## Contribution
I welcome bug reports, feature requests, and pull requests to improve the module! Can't guarantee they'll necessarily be implemented/incorporated, but will do my best to consider. If you do plan a pull request for a larger feature, please create an issue to discuss first.

## Supported Runtimes
* Lambda NodeJS 6.10+
* NodeJS 6+

## Usage
```javascript
const resp = require("aws-apig-responses");

/* 404 Not Found */
throw new resp.NotFound();
throw new resp.NotFound("These aren't the droids you're looking for");
throw new resp[404]();
throw new resp[404]("These aren't the droids you're looking for");

/* 500 Internal Server Error */
throw new resp.InternalServerError();
throw new resp.InternalServerError("Mistakes were made");
throw new resp.[500]();
throw new resp.[500]("Mistakes were made");

/* 302 Found */
throw new resp.Found("https://redirect-me-here12345.com");
throw new resp.[302]("https://redirect-me-here12345.com");

```
NOTE: 302 does not return the Location header natively, but is intended to provide a location for the URL that can be referenced in a mapping template

All HTTP codes are available either using the pascal case name (e.g. BadRequest, ServiceUnavailable, etc. [including ImATeapot!]) or numeric code. For a full list, please reference http.STATUS_CODES in the Node HTTP module documentation.

Upon invoking new, a subclass of HttpError, which is a subclass of Error, with the prepended message is returned. Details below.

### HttpError
Base class for the specific HTTP errors
Supports non-errors, such as 302 Redirect, but since API Gateway requires an Error, this extends Error and is named accordingly

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| message | <code>string</code> | Message for the response. A status code and pascal case identifier are prepended. e.g. [404][NotFound] |
| statusCode | <code>string</code> | HTTP status code e.g. 404 |
| statusId | <code>string</code> | Pascal case identifier of the HTTP status (e.g. NotFound) |
| status | <code>string</code> | Same as statusCode |
| origMessage | <code>string</code> | The original non-prepended message |

#### Example
```javascript
throw new resp.NotFound("These aren't the droids you're looking for");
```
* Returns: NotFoundError
* Message: [404][NotFound]: These aren't the droids you're looking for
