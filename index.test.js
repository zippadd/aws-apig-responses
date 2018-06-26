const awsAPIGResp = require("./index");

describe("Basic Tests", () => {
  test("Gets a matched object for a basic 500 error", () => {
    expect.assertions(1);
    const errorCode = "500";
    const errorId = "InternalServerError";
    const errorMsg = "Mistakes were made";
    return expect(new awsAPIGResp.InternalServerError(errorMsg)).toMatchObject({
      message: `[${errorCode}][${errorId}]: ${errorMsg}`,
      statusCode: errorCode,
      statusId: errorId,
      status: errorCode
    });
  });

  test("Gets a matched object for a basic 500 error using brackets", () => {
    expect.assertions(1);
    const errorCode = "500";
    const errorId = "InternalServerError";
    const errorMsg = "Mistakes were made";
    return expect(new awsAPIGResp[500](errorMsg)).toMatchObject({ // eslint-disable-line no-magic-numbers
      message: `[${errorCode}][${errorId}]: ${errorMsg}`,
      statusCode: errorCode,
      statusId: errorId,
      status: errorCode
    });
  });

  test("Gets a matched object for a basic 500 error using brackets with string", () => {
    expect.assertions(1);
    const errorCode = "500";
    const errorId = "InternalServerError";
    const errorMsg = "Mistakes were made";
    return expect(new awsAPIGResp["500"](errorMsg)).toMatchObject({
      message: `[${errorCode}][${errorId}]: ${errorMsg}`,
      statusCode: errorCode,
      statusId: errorId,
      status: errorCode
    });
  });

  test("Gets a matched object for a basic 404 error", () => {
    expect.assertions(1);
    const errorCode = "404";
    const errorId = "NotFound";
    const errorMsg = "These aren't the droids you're looking for";
    return expect(new awsAPIGResp.NotFound(errorMsg)).toMatchObject({
      message: `[${errorCode}][${errorId}]: ${errorMsg}`,
      statusCode: errorCode,
      statusId: errorId,
      status: errorCode
    });
  });

  test("Gets a matched object for a basic 404 error using brackets", () => {
    expect.assertions(1);
    const errorCode = "404";
    const errorId = "NotFound";
    const errorMsg = "These aren't the droids you're looking for";
    return expect(new awsAPIGResp[404](errorMsg)).toMatchObject({ // eslint-disable-line no-magic-numbers
      message: `[${errorCode}][${errorId}]: ${errorMsg}`,
      statusCode: errorCode,
      statusId: errorId,
      status: errorCode
    });
  });

  test("Gets a matched object for a basic 404 error using brackets with string", () => {
    expect.assertions(1);
    const errorCode = "404";
    const errorId = "NotFound";
    const errorMsg = "These aren't the droids you're looking for";
    return expect(new awsAPIGResp["404"](errorMsg)).toMatchObject({
      message: `[${errorCode}][${errorId}]: ${errorMsg}`,
      statusCode: errorCode,
      statusId: errorId,
      status: errorCode
    });
  });

  test("Gets a matched object for a basic 302 redirect", () => {
    expect.assertions(1);
    const httpCode = "302";
    const httpId = "Found";
    const redirectURL = "https://redirect-them-onward.example";
    return expect(new awsAPIGResp.Found(redirectURL)).toMatchObject({
      message: `[${httpCode}][${httpId}]: ${redirectURL}`,
      statusCode: httpCode,
      statusId: httpId,
      status: httpCode
    });
  });

  test("Gets a matched object for a basic 302 redirect using brackets", () => {
    expect.assertions(1);
    const httpCode = "302";
    const httpId = "Found";
    const redirectURL = "https://redirect-them-onward.example";
    return expect(new awsAPIGResp[302](redirectURL)).toMatchObject({ // eslint-disable-line no-magic-numbers
      message: `[${httpCode}][${httpId}]: ${redirectURL}`,
      statusCode: httpCode,
      statusId: httpId,
      status: httpCode
    });
  });

  test("Gets a matched object for a basic 302 redirect using brackets with strings", () => {
    expect.assertions(1);
    const httpCode = "302";
    const httpId = "Found";
    const redirectURL = "https://redirect-them-onward.example";
    return expect(new awsAPIGResp["302"](redirectURL)).toMatchObject({
      message: `[${httpCode}][${httpId}]: ${redirectURL}`,
      statusCode: httpCode,
      statusId: httpId,
      status: httpCode
    });
  });

  test("Gets a matched object for a basic 500 error with a blank message", () => {
    expect.assertions(1);
    const errorCode = "500";
    const errorId = "InternalServerError";
    const errorMsg = "";
    return expect(new awsAPIGResp.InternalServerError()).toMatchObject({
      message: `[${errorCode}][${errorId}]: ${errorMsg}`,
      statusCode: errorCode,
      statusId: errorId,
      status: errorCode
    });
  });

  test("Gets a matched object for a basic 500 error with an error message", () => {
    expect.assertions(1);
    const errorCode = "500";
    const errorId = "InternalServerError";
    const errorMsg = "BIG mistakes were made";
    return expect(new awsAPIGResp.InternalServerError(new Error(errorMsg))).toMatchObject({
      message: `[${errorCode}][${errorId}]: Error: ${errorMsg}`,
      statusCode: errorCode,
      statusId: errorId,
      status: errorCode
    });
  });
});

describe("Invalid Usage", () => {
  test("Gets a thrown error for a non-existant basic 579 error", () => {
    expect.assertions(1);
    const errorMsg = "Mistakes were made";
    return expect(() => {
      new awsAPIGResp.NonExistantError(errorMsg); // eslint-disable-line no-new
    }).toThrow();
  });

  test("Gets a thrown error for a non-existant basic 579 error using brackets", () => {
    expect.assertions(1);
    const errorMsg = "Mistakes were made";
    return expect(() => {
      new awsAPIGResp[579](errorMsg); // eslint-disable-line no-new, no-magic-numbers
    }).toThrow();
  });

  test("Gets a thrown error for a non-existant basic 579 error using brackets with strings", () => {
    expect.assertions(1);
    const errorMsg = "Mistakes were made";
    return expect(() => {
      new awsAPIGResp["579"](errorMsg); // eslint-disable-line no-new
    }).toThrow();
  });
});
