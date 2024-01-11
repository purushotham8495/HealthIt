import React from 'react';
import './Review.css';

const Review = () => {
    const submitFeedback = () => {
        // You can add your JavaScript logic 
        alert('Feedback submitted successfully!');
        document.getElementById('feedbackForm').reset();
    }
    return (
        <div>
            <section className="home" id="home">
                <div className="container">
                    <h1>Leave Your Feedback</h1>
                    <form id="feedbackForm">
                        <label htmlFor="feedback">Your Feedback :</label><br />
                        <textarea
                            id="feedback"
                            name="feedback"
                            rows="4"
                            placeholder="Write your feedback here"
                            required
                        ></textarea><br />
                        <button type="button" onClick={submitFeedback}>
                            Submit
                        </button>
                    </form>
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
};

export default Review;
