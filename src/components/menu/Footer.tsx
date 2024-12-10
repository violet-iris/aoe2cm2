import * as React from "react";
import {Link} from 'react-router-dom';

class Footer extends React.Component<object, object> {
    public render() {
        return (
            <footer className="footer px-4 py-6">
                <div className="container">
                    <div className="columns">
                        <div className="column is-two-thirds content is-small mb-0">
                            <p>
                                Created by <a href="https://siegeengineers.org"> Siege
                                Engineers</a> (2019 &ndash; {new Date().getFullYear()})
                                &bull;
                                Based on the first version by <span className='is-family-code'>pip</span>
                            </p>
                            <p>
                                中文站点由 <a href="https://www.aoe4cn.com">帝国时代4中文社区</a> (2023 &ndash; {new Date().getFullYear()}) 提供支持
                                &bull;&nbsp;
                                <a href="https://beian.miit.gov.cn" target="_blank" rel="noreferrer">苏ICP备20006927号-2</a>
                                &bull;&nbsp;
                                <a href="https://www.beian.gov.cn/portal/registerSystemInfo?recordcode=32098102321212"
                                   target="_blank" rel="noreferrer">苏公网安备32098102321212号</a>
                            </p>
                            {/*<p>*/}
                            {/*    Age of Empires &copy; Microsoft Corporation. <b>Captains Mode for Age of Empires</b> was*/}
                            {/*    created under Microsoft's "<a*/}
                            {/*    href="https://www.xbox.com/en-us/developers/rules" rel='nofollow'>*/}
                            {/*    Game Content Usage Rules</a>" using assets from Age of Empires II, Age of Empires III,*/}
                            {/*    and Age of Empires IV, and it is not*/}
                            {/*    endorsed by or affiliated with Microsoft.*/}
                            {/*</p>*/}
                            <p>
                                Age of Empires / Age of Mythology &copy; Microsoft Corporation<br/>
                                <b>《帝国时代》队长模式（BP模式）</b>
                                是根据 Microsoft 的
                                "<a href="https://www.xbox.com/en-us/developers/rules"
                                    rel='nofollow'>Game Content Usage Rules</a>" 创建的。<br/>
                                站点使用了《帝国时代》系列和《神话时代》系列的素材。本站并未获得 Microsoft 的认可，也与
                                Microsoft 无关。
                            </p>
                        </div>
                        <div className="column is-one-third">
                            <nav className="breadcrumb is-small is-right has-bullet-separator"
                                 aria-label="footer links">
                                <ul>
                                    {/*<li><a href="https://siegeengineers.org/donate">Support this project</a></li>*/}
                                    {/*<li><a href="https://github.com/SiegeEngineers/aoe2cm2">Contribute on GitHub</a></li>*/}
                                    <li><Link to="/api">API</Link></li>
                                    <li><a href="https://aoe2cm.net">源站</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
