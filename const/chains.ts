import {
    Goerli,
    Avalanche,
    AvalancheFuji,
    Ethereum,
    Chain,
} from "@thirdweb-dev/chains";

export type NetworkType = {
    name: string;
    network: Chain;
    src: string;
    domain: number;
    tokenMessengerContract: string;
    messageTransmitterContract: string;
    usdcContract: string;
    tokenMinterContract: string;
    api: string;
};

export const GoerliTestnet: NetworkType = {
    name: "Goerli",
    network: Goerli,
    src: "/eth.png",
    domain: 0,
    tokenMessengerContract: "0xd0c3da58f55358142b8d3e06c1c30c5c6114efe8",
    messageTransmitterContract: "0x0a2d7f7e0b6b3e4b0b0b9e2d6f7e0b6b3e4b0b0b",
    usdcContract: "0x07865c6E87B9F70255377e024ace6630C1Eaa37F",
    tokenMinterContract: "0xca6b4c00831ffb77afe22e734a6101b268b7fcbe",
    api: "https://iris-api-sandbox.circle.com/attestations",
};

export const FujiTestnet: NetworkType = {
    name: "Avalanche Fuji Testnet",
    network: AvalancheFuji,
    src: "/avax.png",
    domain: 1,
    tokenMessengerContract: "0xeb08f243e5d3fcff26a9e38ae5520a669f4019d0",
    messageTransmitterContract: "0xa9fb1b3009dcb79e2fe346c16a604b8fa8ae0a79",
    usdcContract: "0x5425890298aed601595a70AB815c96711a31Bc65",
    tokenMinterContract: "0x4ed8867f9947a5fe140c9dc1c6f207f3489f501e",
    api: "https://iris-api-sandbox.circle.com/attestations",
};

export const Mainnet: NetworkType = {
    name: "Mainnet",
    network: Ethereum,
    src: "/eth.png",
    domain: 0,
    tokenMessengerContract: "0xbd3fa81b58ba92a82136038b25adec7066af3155",
    messageTransmitterContract: "0x0a992d191deec32afe36203ad87d7d289a738f81",
    usdcContract: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
    tokenMinterContract: "0xc4922d64a24675e16e1586e3e3aa56c06fabe907",
    api: "https://iris-api.circle.com/attestations",
};

export const AvalancheMainnet: NetworkType = {
    name: "Avalanche Fuji Mainnet",
    network: Avalanche,
    src: "/avax.png",
    domain: 1,
    tokenMessengerContract: "0x6b25532e1060ce10cc3b0a99e5683b91bfde6982",
    messageTransmitterContract: "0x8186359af5f57fbb40c6b14a588d2a59c0c29880",
    usdcContract: "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E",
    tokenMinterContract: "0x420f5035fd5dc62a167e7e7f08b604335ae272b8",
    api: "https://iris-api.circle.com/attestations",
};