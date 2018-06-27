const pascalCase = require("pascal-case");
const http = require("http");

/**
 * Base class for the specific HTTP errors
 * Supports non-errors, such as 302 Redirect, but since API Gateway requires an Error, this extends Error and is named accordingly
 * @property {string} message     Message for the response. A status code and pascal case identifier are prepended. e.g. [404][NotFound]
 * @property {string} statusCode  HTTP status code e.g. 404
 * @property {string} statusId    Pascal case identifier of the HTTP status (e.g. NotFound)
 * @property {string} status      Same as statusCode
 * @property {string} origMessage The original non-prepended message
 */
class HttpError extends Error {
  /**
   * Creates a new HttpError
   * @param {string} statusCode  HTTP status code e.g. 404
   * @param {string} message     Message for the response. Will be automatically prepended.
   * @param {string} statusId    Pascal case identifier of the HTTP status (e.g. NotFound)
   */
  constructor(statusCode, message, statusId) {
    const prependedMsg = `[${statusCode}][${statusId}]: ${message}`;
    super(prependedMsg);
    this.origMessage = message;
    this.statusCode = statusCode;
    this.statusId = statusId;
    this.status = statusCode;
  }
}

/**
 * Populates the module exports with the
 * @param {object} moduleExports Module exports object
 * @param {object} httpCodesMap  HTTP codes map, code number to description, e.g. "404": "Not Found"
 * @return {void} Passed in module exports object is populated
 */
const populateConstructorExports = (moduleExports, httpCodesMap) => {
  for (const code of Object.keys(httpCodesMap)) {
    const statusDesc = httpCodesMap[code];
    const statusId = pascalCase(statusDesc.replace("'", "")); // Handle apostrophe correctly (I'm a teapot => ImATeapot)
    const codeErrorClass = class extends HttpError {
      /**
       * Creates a new class extending HttpError specific to the HTTP status code (e.g NotFoundError)
       * @param {string} message Message for the response
       */
      constructor(message = "") {
        super(code, message, statusId);
        this.name = `${statusId}`;
      }
    };

    moduleExports[code] = codeErrorClass;
    moduleExports[statusId] = exports[code];
  }
};

populateConstructorExports(module.exports, http.STATUS_CODES);
