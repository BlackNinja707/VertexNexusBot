const isWalletAddress = (address) => {
    return /^0x[a-fA-F0-9]{40}$/.test(address);
};

module.exports = {
    isWalletAddress,
};