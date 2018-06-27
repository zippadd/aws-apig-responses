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