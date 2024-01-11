import React from 'react';

const Blogs = () => {
    return (
        <div>
            <section class="blogs" id="blogs">
                <h1 class="heading">Our <span>blogs</span></h1>
                <div class="box-container">
                    <div class="box">
                        <div class="image">
                            <img src="./image/blog-1.jpg" alt="" />
                        </div>
                        <div class="content">
                            <div class="icon">
                                <a href="#"><i class="fas fa-calendar"></i>23rd Nov,2023</a>
                                <a href="#"><i class="fas fa-user"></i> by _____</a>
                            </div>
                            <h3>blog title</h3>
                            <p>anything</p>
                            <a href="#" class="btn">learn more <span class="fas fa-chevron-right"></span> </a>
                        </div>
                    </div>
                    <div class="box">
                        <div class="image">
                            <img src="./image/blog-2.jpg" alt="" />
                        </div>
                        <div class="content">
                            <div class="icon">
                                <a href="#"><i class="fas fa-calendar"></i> 23rd Nov,2023</a>
                                <a href="#"><i class="fas fa-user"></i> by ______</a>
                            </div>
                            <h3>blog title</h3>
                            <p>anything</p>
                            <a href="#" class="btn">learn more <span class="fas fa-chevron-right"></span> </a>
                        </div>
                    </div>
                    <div class="box">
                        <div class="image">
                            <img src="./image/blog-3.jpg" alt="" />
                        </div>
                        <div class="content">
                            <div class="icon">
                                <a href="#"><i class="fas fa-calendar"></i> 23rd Nov,2023</a>
                                <a href="#"><i class="fas fa-user"></i> by _____</a>
                            </div>
                            <h3>Smiles</h3>
                            <p>"Doctors have a big responsibility to bring smiles on the faces of suffering humanity."</p>
                            <a href="#" class="btn">learn more <span class="fas fa-chevron-right"></span> </a>
                        </div>
                    </div>
                </div>
            </section>
            <section class="footer">
                <div class="box-container">
                    <div class="box">
                        <h3>quick links</h3>
                        <a href="#"> <i class="fas fa-chevron-right"></i> Home</a>
                        <a href="#"> <i class="fas fa-chevron-right"></i> Stored Files</a>
                        <a href="#"> <i class="fas fa-chevron-right"></i> About</a>
                        <a href="#"> <i class="fas fa-chevron-right"></i> Doctors</a>
                        <a href="#"> <i class="fas fa-chevron-right"></i> Book appointment</a>
                        <a href="#"> <i class="fas fa-chevron-right"></i> Review</a>
                        <a href="#"> <i class="fas fa-chevron-right"></i> Blogs</a>
                    </div>
                    <div class="box">
                        <h3>Our services</h3>
                        <a href="#"> <i class="fas fa-chevron-right"></i> Storage</a>
                        <a href="#"> <i class="fas fa-chevron-right"></i> Consultation</a>
                        <a href="#"> <i class="fas fa-chevron-right"></i> Massage therapy</a>
                        <a href="#"> <i class="fas fa-chevron-right"></i> Cardioloty</a>
                        <a href="#"> <i class="fas fa-chevron-right"></i> Diagnosis</a>
                        <a href="#"> <i class="fas fa-chevron-right"></i> Ambulance service</a>
                    </div>
                    <div class="box">
                        <h3>Contact info</h3>
                        <a href="#"> <i class="fas fa-phone"></i> +91-9967814533</a>
                        <a href="#"> <i class="fas fa-phone"></i> 080-35648102</a>
                        <a href="#"> <i class="fas fa-envelope"></i> healthrek09.info.com</a>
                        <a href="#"> <i class="fas fa-envelope"></i> healthrek09@gmail.com</a>
                        <a href="#"> <i class="fas fa-map-marker-alt"></i> Bangalore, Karnataka-98.</a>
                    </div>
                    <div class="box">
                        <h3>follow us</h3>

                        <a href="#"> <i class="fab fa-facebook-f"></i> facebook</a>
                        <a href="#"> <i class="fab fa-twitter"></i> twitter</a>
                        <a href="#"> <i class="fab fa-linkedin"></i> linkedin</a>
                        <a href="#"> <i class="fab fa-instagram"></i> instagram</a>
                        <a href="#"> <i class="fab fa-youtube"></i> youtube</a>
                        <a href="#"> <i class="fab fa-pinterest"></i> pinterest</a>
                    </div>
                </div>
                <div class="credit">Created by <span> Healthrek Associates </span> | all right reserved</div>
            </section>
        </div>
    );
}

export default Blogs;
