import React from 'react';

const Blogs = () => {
    return (
        <div className='container w-75 border mt-5 '>
            <div>
                <h2> Difference Between Javascript and node js</h2>
                <p>
                    JavaScript is a lightweight, cross-platform, interpreted scripting programming language that is primarily used for client-side scripting. It's built into both Java and HTML. On the other hand, Node.js is a server-side scripting language based on the Google Chrome V8 engine. As a result, it's used to build network-centric applications. It is a distributed system that is used for data-intensive real-time applications.<br />
                    JavaScript is a simple programming language that could be run in any browser that supports the JavaScript Engine. On the other hand, Node.js is a running environment or interpreter for the JavaScript programming language. It needs libraries that may be easily accessed from JavaScript programming to make it more useful.
                </p>

                <hr />
            </div>
            <div>
                <h2>Difference between sql and nosql databases</h2>
                <p>
                    The five critical differences between SQL vs NoSQL are:
                    <br />
                    SQL databases are relational, NoSQL databases are non-relational.<br />
                    SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.<br />
                    SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.<br />
                    SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.<br />
                    SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.
                </p>
                <hr />
            </div>
            <div>
                <h2>What is the purpose of jwt and how does it works</h2>
                <p>
                    JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA or ECDSA.

                    Although JWTs can be encrypted to also provide secrecy between parties, we will focus on signed tokens. Signed tokens can verify the integrity of the claims contained within it, while encrypted tokens hide those claims from other parties. When tokens are signed using public/private key pairs, the signature also certifies that only the party holding the private key is the one that signed it.
                </p>
            </div>

        </div>
    );
};

export default Blogs;