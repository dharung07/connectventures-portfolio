import image1 from '../asset/image1.png';
import image2 from '../asset/image2.png';
import image3 from '../asset/image3.png';

const Screenshots = () => {

    const images = [image1, image2, image3];

    return (
        <section id='snaps' className="bg-gradient-to-tr from-[#2E3192] to-[#1BFFFF] py-12 px-6 md:p-24 bg-gray-50">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-600 text-center mb-12">
                Snaps Of The Portal
            </h2>

            <div className='flex flex-col gap-5'>
                {
                    images.map((img, index) => (
                        <img
                            src={img}
                            key={index}
                            className=''
                        />
                    ))
                }
                <a
                    href="https://drive.google.com/drive/folders/1i9t58CDpzznwaBM7PihydlfUCPFqdqdd"
                    target='blank'
                    className="bg-gray-200 text-[#000080] text-center px-6 py-2 rounded-lg text-lg md:text-xl font-semibold shadow-lg hover:bg-blue-100 transition duration-300"
                >
                    View Screenshots Of The Portal
                </a>
            </div>
        </section>
    );
}

export default Screenshots;