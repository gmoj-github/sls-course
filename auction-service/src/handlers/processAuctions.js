import createError from "http-errors";
import { getEndedAuctions } from "../../lib/getEndedAuctions";
import { closeAuction } from "../../lib/closeAuction";

async function processAuctions(event, context){
    console.log("Processing auctions!");

    try{
        const auctionsToClose = await getEndedAuctions();
        const closePromisses = auctionsToClose.map(auction => closeAuction(auction));
        await Promise.all(closePromisses);

        return {closed: closePromisses.length};
    } catch(error){
        console.error(error);
        throw new createError.InternalServerError(error);
    }
}

export const handler = processAuctions;