
const CodeText = ({ children }) => {
    return (
        <code class="no-underline cursor-default link link-error">{ /*@once*/ children}</code>
    )
}


const vi = [
    {
        id: 'item-1',
        header: 'Ngôn ngữ lập trình',
        children: <p>
            Các ngôn ngữ lập trình đã học là {" "} <CodeText>Python</CodeText>, <CodeText>Javascript</CodeText>,
            <CodeText>Typescript</CodeText>, <CodeText>SQL</CodeText>,
            và <CodeText>VBA</CodeText>
        </p>,
    },
    {
        id: 'item-2',
        header: 'Kiến thức về backend',
        children: <>
            <p>
                Xây dựng API bằng ngôn ngữ Python and Javascript,
                đặc biệt là REST API bằng <CodeText>Flask, Django, FastAPI</CodeText> (Python),
                <CodeText>Express</CodeText> (JS), và <CodeText>GraphQL</CodeText> server bằng <CodeText>Strapi</CodeText>,
                Ngoài ra còn có khả năng xử lí một số yêu cầu liên quan đến API như Xác nhận và phân quyền người dùng, Triển khai API
            </p>
        </>,
    },
    {
        id: 'item-3',
        header: 'Kiến thức về frontend',
        children: <>
            <p>
                Sử dụng tốt các thư viện <CodeText>React, Vue, SolidJS, jQuery and Vanilla Javascript</CodeText> để xây dựng trang web,
                và các frameworks với các phương pháp render khác nhau như <CodeText>NextJS</CodeText>, <CodeText>Gatsby</CodeText> và <CodeText>AstroJS</CodeText>
            </p>
            <p>
                I am learnt several models of communications to the backend, like real-time connection using <CodeText>Socket.io</CodeText>,
                and GraphQL data fetching
            </p>
            <p>I used to several styling methods, including <CodeText>Vanilla CSS, SCSS and TailwindCSS</CodeText></p>
        </>,
    },
    {
        id: 'item-4',
        header: 'Cơ sở dữ liệu',
        children: <>
            <p>
                Có khả năng xây dựng, kết nối, và truy vấn các CSDL <CodeText>MySQL, PostgreSQL, SQLite</CodeText>, và NoSQL <CodeText>MongoDB, Firebase</CodeText>
                dùng lệnh <CodeText>SQL</CodeText> hoặc thông qua ORMs như là <CodeText>Prisma</CodeText> (JS) và <CodeText>SQLAlchemy</CodeText> (Python)
            </p>
        </>,
    },
    {
        id: 'item-5',
        header: 'Cấu trúc dữ liệu và thuật toán',
        children: <>
            <p>
                Có khả năng giải các bài toán cấu trúc dữ liệu và thuật toán từ dễ đến trung bình từ Leetcode và
                hiểu biết về design patterns và OOP,
                và có kiến thức trong việc chuẩn hóa - chuẩn hóa ngược (normalization - denormalization) databases dùng star-schema và snowflake
            </p>
        </>,
    },
    {
        id: 'item-6',
        header: 'Các kiến thức khác',
        children: <>
            <p>
                Một số công nghệ khác tôi đã sử dụng bao gồm <CodeText>lệnh Linux</CodeText>, <CodeText>Git</CodeText>, <CodeText>Docker</CodeText>, Triển khai đám mây với <CodeText>Google Cloud Platform</CodeText>
            </p>
        </>,
    },

]

const en = [
    {
        id: 'item-1',
        header: 'Programming Languages',
        children: <p>
            The programming languages that I've learnt are
            <CodeText>Python</CodeText>, <CodeText>Javascript</CodeText>,
            <CodeText>Typescript</CodeText>, <CodeText>SQL</CodeText>,
            and <CodeText>VBA</CodeText>
        </p>,
    },
    {
        id: 'item-2',
        header: 'Backend technologies',
        children: <>
            <p>
                I've been developing APIs and websites with Python and Javascript frameworks,
                specifically REST API using <CodeText>Flask, Django, FastAPI</CodeText> (Python),
                <CodeText>Express</CodeText> (JS), and <CodeText>GraphQL</CodeText> server using <CodeText>Strapi</CodeText>,
                as well as implementing common API requirements including Authentication-authorization and Deployment
            </p>
        </>,
    },
    {
        id: 'item-3',
        header: 'Frontend technologies',
        children: <>
            <p>
                I am comfortable develop websites using <CodeText>React, Vue, SolidJS, jQuery and Vanilla Javascript</CodeText>,
                and frameworks with hybrid render methods like <CodeText>NextJS</CodeText>, <CodeText>Gatsby</CodeText> and <CodeText>AstroJS</CodeText>
            </p>
            <p>
                I am learnt several models of communications to the backend, like real-time connection using <CodeText>Socket.io</CodeText>,
                and GraphQL data fetching
            </p>
            <p>I used to several styling methods, including <CodeText>Vanilla CSS, SCSS and TailwindCSS</CodeText></p>
        </>,
    },
    {
        id: 'item-4',
        header: 'Databases',
        children: <>
            <p>
                I am been using relational databases <CodeText>MySQL, PostgreSQL, SQLite</CodeText>, and NoSQL database like <CodeText>MongoDB, Firebase</CodeText>
                by using both <CodeText>SQL</CodeText> commands directly and via ORMs such as <CodeText>Prisma</CodeText> (JS) and <CodeText>SQLAlchemy</CodeText> (Python)
            </p>
        </>,
    },
    {
        id: 'item-5',
        header: 'Datastructure and algorithm',
        children: <>
            <p>
                I am able to solve easy to medium coding interview question from LeetCode and
                familiar with design patterns and OOP concepts,
                and having knowledge in databases normalization - denormalization base on star-schema or snowflake
            </p>
        </>,
    },
    {
        id: 'item-6',
        header: 'Other',
        children: <>
            <p>
                Some other technologies that I have learnt is <CodeText>Linux commands</CodeText>, <CodeText>Git</CodeText>, <CodeText>Docker</CodeText>, Cloud deployment via <CodeText>Google Cloud Platform</CodeText>
            </p>
        </>,
    },

]

const educationListing = {
    vi: vi,
    en: en
}

export default educationListing