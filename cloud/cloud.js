import Moralis from "moralis/types";

Moralis.Cloud.define("getMyList", async (request) => {

    const addrs = request.params.addrs;
    const user = Moralis.Object.extend("_User");
    const query = new Moralis.Query(user);
    query.equalTo("ethAddress", addrs);

    const data = await query.first({ useMasterKey: true} );

    if (data.attributes.myList){
        return data.attributes.myList;
    } else {
        return [];
    }
})