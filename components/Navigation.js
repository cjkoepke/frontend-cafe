import Link from 'next/link';

const Navigation = () => (
    <nav>
        <style jsx>{`
            float: right;

            ul {
                text-align: right;
            }
            li {
                float: none;
                display: inline-block;
                list-style-type: none;
                margin-left: 20px;
            }
        `}</style>
        <ul>
            <li><Link prefetch href="/"><a>Home</a></Link></li>
            <li><Link prefetch href="/archives"><a>Archives</a></Link></li>
        </ul>
    </nav>
)

export default Navigation;
