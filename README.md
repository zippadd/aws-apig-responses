# aws-apig-responses

[![Greenkeeper badge](https://badges.greenkeeper.io/zippadd/aws-apig-responses.svg)](https://greenkeeper.io/)

A Error derived object factory designed to provide an easy map to AWS API Gateway error regex.
This is accomplished through prepending the status code (e.g. 404) and pascal code id (e.g. NotFound) to the Error message.

Supports client (e.g. 404), server (e.g. 500), and non errors (e.g. 302) for maximum flexibility.
Utilizes Nodes built-in HTTP module for status codes and descriptions.