import React from 'react';

const FAQ = () => {
    return (
        <div id="questions" className='p-5'>
            <div className="container">
                <h2 className="text-centered mb-4">Frequently Asked Questions</h2>
                <div id='' className="accordion accordion-flush" id="questions">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#question-one"
                            >
                                Where exactly are you located?
                            </button>
                        </h2>
                        <div
                            id="question-one"
                            className="accordion-collapse collapse"
                            data-bs-parent="#questions"
                        >
                            <div className="accordion-body">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                                beatae fuga animi distinctio perspiciatis adipisci velit maiores
                                totam tempora accusamus modi explicabo accusantium consequatur,
                                praesentium rem quisquam molestias at quos vero. Officiis ad
                                velit doloremque at. Dignissimos praesentium necessitatibus
                                natus corrupti cum consequatur aliquam! Minima molestias iure
                                quam distinctio velit.
                            </div>
                        </div>
                    </div>
                    {/* Item 2 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#question-two"
                            >
                                How much does it cost to attend?
                            </button>
                        </h2>
                        <div
                            id="question-two"
                            className="accordion-collapse collapse"
                            data-bs-parent="#questions"
                        >
                            <div className="accordion-body">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                                beatae fuga animi distinctio perspiciatis adipisci velit maiores
                                totam tempora accusamus modi explicabo accusantium consequatur,
                                praesentium rem quisquam molestias at quos vero. Officiis ad
                                velit doloremque at. Dignissimos praesentium necessitatibus
                                natus corrupti cum consequatur aliquam! Minima molestias iure
                                quam distinctio velit.
                            </div>
                        </div>
                    </div>
                    {/* Item 3 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#question-three"
                            >
                                What do I need to Know?
                            </button>
                        </h2>
                        <div
                            id="question-three"
                            className="accordion-collapse collapse"
                            data-bs-parent="#questions"
                        >
                            <div className="accordion-body">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                                beatae fuga animi distinctio perspiciatis adipisci velit maiores
                                totam tempora accusamus modi explicabo accusantium consequatur,
                                praesentium rem quisquam molestias at quos vero. Officiis ad
                                velit doloremque at. Dignissimos praesentium necessitatibus
                                natus corrupti cum consequatur aliquam! Minima molestias iure
                                quam distinctio velit.
                            </div>
                        </div>
                    </div>
                    {/* Item 4 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#question-four"
                            >
                                How Do I sign up?
                            </button>
                        </h2>
                        <div
                            id="question-four"
                            className="accordion-collapse collapse"
                            data-bs-parent="#questions"
                        >
                            <div className="accordion-body">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                                beatae fuga animi distinctio perspiciatis adipisci velit maiores
                                totam tempora accusamus modi explicabo accusantium consequatur,
                                praesentium rem quisquam molestias at quos vero. Officiis ad
                                velit doloremque at. Dignissimos praesentium necessitatibus
                                natus corrupti cum consequatur aliquam! Minima molestias iure
                                quam distinctio velit.
                            </div>
                        </div>
                    </div>
                    {/* Item 5 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#question-five"
                            >
                                Do you help me find a job?
                            </button>
                        </h2>
                        <div
                            id="question-five"
                            className="accordion-collapse collapse"
                            data-bs-parent="#questions"
                        >
                            <div className="accordion-body">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                                beatae fuga animi distinctio perspiciatis adipisci velit maiores
                                totam tempora accusamus modi explicabo accusantium consequatur,
                                praesentium rem quisquam molestias at quos vero. Officiis ad
                                velit doloremque at. Dignissimos praesentium necessitatibus
                                natus corrupti cum consequatur aliquam! Minima molestias iure
                                quam distinctio velit.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
