import React from 'react';

const socialLinks = [
{
    id: 'telegram',
    url: 'https://t.me/RDD_Swarm'
},
{
    id: 'github',
    url: 'https://github.com/'
}

];

const Footer = ({version}) => {
    return (
        <div className="menu-footer">
            <div>Version: 1.0.0</div>
            <div>SWARMDAO</div>
            <div>
                {socialLinks.map(item =>
                    (<a key={item.id} className={`social ${item.id}`} href={item.url} target="_blank"></a>))}
            </div>
            <div>
                <a className="fade" href="https://swrmdao.com" target="_blank">Website</a>
            </div>
        </div>
    );
}

export default Footer;