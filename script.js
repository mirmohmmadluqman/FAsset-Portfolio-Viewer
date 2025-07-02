    // I had used this JS in index.html, there's no need to include it
    //
    //          /\
    //         /  \
    //        /    \
    //       /      \
    //      /        \
    //     /          \
    //    /            \


    import { createWalletClient, custom, createPublicClient } from "https://esm.sh/viem";

    // Get DOM elements
    const connectButton = document.getElementById('connectButton');
    const disconnectButton = document.getElementById("BalanceButton");
    const fundButton = document.getElementById("FundFunction");
    const buyCoffeeButton = document.getElementById("buyMeACoffee");
    const ethAmountInput = document.getElementById("ethAmount");

    let walletClient;   
    let publicClient;

    // Connect to MetaMask
    async function connect() {
        if (typeof window.ethereum !== 'undefined') {
            walletClient = createWalletClient({
                transport: custom(window.ethereum)
            });

            await walletClient.request({ method: 'eth_requestAccounts' });
            console.log('Connected to MetaMask');
            connectButton.innerHTML = 'Connected!';
        } else {
            connectButton.innerHTML = 'Please install MetaMask';
        }
    }

    // Disconnect Stub (MetaMask does not support programmatic disconnect)
    function disconnect() {
        console.log('Disconnect requested. Please disconnect manually in MetaMask.');
        disconnectButton.innerHTML = 'Disconnected (manual)';
    }

    // Fund function
    async function fund() {
        const ethAmount = ethAmountInput.value
        console.log(`Funding with ${ethAmount} ETH...`)

        if (typeof window.ethereum !== 'undefined') {
            walletClient = createWalletClient({
                transport: custom(window.ethereum)
            });

            await walletClient.requestAddresses()
            publicClient = createPublicClient

        } else {
            connectButton.innerHTML = 'Please install MetaMask';
        }
    }





    // Bind button events
    connectButton.onclick = connect;
    disconnectButton.onclick = disconnect;
    fundButton.onclick = fund;
    // buyCoffeeButton.onclick = buyMeACoffee;
