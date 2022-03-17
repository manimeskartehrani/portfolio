/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from 'react';

import PortfolioList from '../portfolioList/PortfolioList';
import './portfolio.scss';

import {
    techSeoPortfolio,
    onPageSeoPortfolio,
    webAppPortfolio,
    mobileAppPortfolio,
    brandingPortfolio,
    contentPortfolio,
} from '../../data';

export default function portfolio() {


    // const [selected, setSelected] = useState();

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selected, setSelected] = useState('tSEO');
    const [data, setData] = useState([]);


    const list = [
        {
            id: 'tSEO',
            title: 'Technical-SEO',
        },
        {
            id: 'oSEO',
            title: 'On-page SEO',
        },
        {
            id: 'web',
            title: 'Web App',
        },
        {
            id: 'mobile',
            title: 'Mobile App',
        },
        {
            id: 'branding',
            title: 'Branding',
        },
        {
            id: 'content',
            title: 'Content',
        },

    ];


    useEffect(() => {
        switch (selected) {
            case 'tSEO':
                setData(techSeoPortfolio);
                break;
            case 'oSEO':
                setData(onPageSeoPortfolio);
                break;
            case 'web':
                setData(webAppPortfolio);
                break;
            case 'mobile':
                setData(mobileAppPortfolio);
                break;
            case 'branding':
                setData(brandingPortfolio);
                break;
            case 'content':
                setData(contentPortfolio);
                break;

            default:
                setData(techSeoPortfolio);
        }


    }, [selected])

    return (
        <div className='portfolio' id='portfolio'>
            <h1>Portfolio</h1>
            <ul>
                {list.map(item => (<PortfolioList title={item.title} active={selected === item.id} setSelected={setSelected} id={item.id} />))}
            </ul>
            <div className="container">
                {data.map((d) => (
                    <div className="item">
                        <img src={d.img} alt="" />

                        <h3>{d.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}

