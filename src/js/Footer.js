import React from 'react';

const socialLinks = [{
    id: 'github',
    url: 'https://github.com/aureus-trading/'
}, {
    id: 'twitter',
    url: 'https://twitter.com/polarityex'
}, {
    id: 'discord',
    url: 'https://discord.gg/BsrCA9mUPS'
}, {
    id: 'telegram',
    url: 'https://t.me/polarityexchange'
}, {
    id: 'reddit',
    url: 'https://www.reddit.com/r/PolarityEx'
}];

const Footer = ({version}) => {
    return (
        <div className="menu-footer">
            <div>Version: {version}</div>
            <div>Brought to you by Polaris Network</div>
            <div>
                {socialLinks.map(item =>
                    (<a key={item.id} className={`social ${item.id}`} href={item.url} target="_blank"></a>))}
            </div>
            <div>
                <a className="fade" href="https://derivatives.market" target="_blank">derivatives.market</a>
            </div>
        </div>
    );
}

export default Footer;
