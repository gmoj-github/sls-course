import middy from "@middy/core";
import middyHttpJsonBodyParser from "@middy/http-json-body-parser";
import middyHttpEventNormalizer from "@middy/http-event-normalizer";
import middyHttpErrorHandler from "@middy/http-error-handler";

export default handler => middy(handler)
    .use([
        middyHttpJsonBodyParser(),
        middyHttpEventNormalizer(),
        middyHttpErrorHandler(),
    ]);