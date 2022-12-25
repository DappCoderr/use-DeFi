import React from 'react'

const Content = ({ title, subtitle }) => {
    return (
        <div className="content">
            <div className="container">
                <h1>Track</h1>
                <div className='container-box'>
                    <h3>{title}</h3>
                    <p>{subtitle}</p>
                </div>
                <div className='container-box'>
                    <h3>{title}</h3>
                    <p>{subtitle}</p>
                </div>
                <div className='container-box'>
                    <h3>{title}</h3>
                    <p>{subtitle}</p>
                </div>
            </div>
        </div>
    )
}

export default Content


// import React from 'react'

// const Content = () => {
//     return (
//         <div className="content">
//             <div className="container-c">
//                 <ul>
//                     <p>Level 1 Beginners Track</p>
//                     <li>What is DeFi?</li>
//                     <li>What are Stable Coins?</li>
//                     <li>What is Liquidity Pools?</li>
//                     <li>What is Staking?</li>
//                     <li>What is Liquidity Mining</li>
//                     <li>What is Automated Market Maker (AMM)?</li>
//                     <li>What is Bridges?</li>
//                     <li>What is Mining or Farming?</li>
//                     <li>What is Impermanent Loss or Divergent Loss?</li>
//                     <li>What is APY?</li>
//                 </ul>
//             </div>
//             <div className="container-c">
//                 <ul>
//                     <p>Level 2 Decentralised Lending Protocol</p>
//                     <li>Compound</li>
//                     <li>Aave</li>
//                 </ul>
//             </div>
//             <div className="container-c">
//                 <ul>
//                     <p>Level 3 Decentralised Exchange (DEX) or AMM</p>
//                     <li>Uniswap</li>
//                     <li>Pancake swap</li>
//                 </ul>
//             </div>
//             <div className="container-c">
//                 <ul>
//                     <p>Level 4 Decentralised Yield Optimization</p>
//                     <li>Yearn Finance</li>
//                 </ul>
//             </div>
//         </div>
//     )
// }

// export default Content