import React from 'react';
import './Files.css';

const Files = () => {
    const clearForm = () => {
        // Implement the logic
        console.log('Form cleared!');
    };
    return (
        <div>
            <br /><br /><br />
            <div id="container">
                <h1>Out Patient Findings</h1>
                <h2>Admission Record</h2>
                <h2>Out Patient Findings</h2>
                <br />
                <form action="/submit" method="post" id="myForm">
                    <label htmlFor="caseNumber">Patient Case Number &nbsp;&nbsp;&nbsp; :</label>
                    <input type="text" id="caseNumber" name="caseNumber" placeholder="Enter Case Number" required />

                    <label htmlFor="chiefComplaint">Chief Complaint &nbsp;&nbsp;&nbsp; :</label>
                    <input type="text" id="chiefComplaint" name="chiefComplaint" placeholder="Enter Chief Complaint" required />

                    <label htmlFor="history">History Of Present Illness &nbsp;&nbsp;&nbsp; :</label>
                    <textarea id="history" name="history" placeholder="Enter History of Present Illness" required></textarea>

                    <h2>VITAL SIGNS</h2><br />

                    <label htmlFor="bloodPressure">Blood Pressure (BP) &nbsp;&nbsp;&nbsp; :</label>
                    <input type="text" id="bloodPressure" name="bloodPressure" placeholder="BP" required />

                    <label htmlFor="respiratoryRate">Respiratory Rate (RR) &nbsp;&nbsp;&nbsp; :</label>
                    <input type="text" id="respiratoryRate" name="respiratoryRate" placeholder="RR" required />

                    <label htmlFor="capillaryRefill">Capillary Refill (CR) &nbsp;&nbsp;&nbsp; :</label>
                    <input type="text" id="capillaryRefill" name="capillaryRefill" placeholder="CR" required />

                    <label htmlFor="temperature">Temperature (TEMP) &nbsp;&nbsp;&nbsp; :</label>
                    <input type="text" id="temperature" name="temperature" placeholder="TEMP" required />

                    <label htmlFor="weight">Weight (WT) &nbsp;&nbsp;&nbsp; :</label>
                    <input type="text" id="weight" name="weight" placeholder="WT" required />

                    <label htmlFor="pulseRate">Pulse Rate (PR) &nbsp;&nbsp;&nbsp; :</label>
                    <input type="text" id="pulseRate" name="pulseRate" placeholder="PR" required />

                    <label htmlFor="date">DATE &nbsp;&nbsp;&nbsp; :</label>
                    <input type="date" id="date" name="date" required />

                    <h2>PHYSICAL EXAMINATION</h2><br />
                    <label htmlFor="physicalExam">Enter Physical Examination &nbsp;&nbsp;&nbsp; :</label>
                    <textarea id="physicalExam" name="physicalExam" placeholder="Enter Physical Examination" required></textarea>

                    <label htmlFor="diagnosis">Diagnosis &nbsp;&nbsp;&nbsp; :</label>
                    <input type="text" id="diagnosis" name="diagnosis" placeholder="Enter Diagnosis" required />

                    <label htmlFor="medication">Medication/Treatment &nbsp;&nbsp;&nbsp; :</label>
                    <input type="text" id="medication" name="medication" placeholder="Enter Medication/Treatment" required />

                    <h2>ATTENDING PHYSICIAN</h2><br />
                    <label htmlFor="attendingPhysician">Select Physician &nbsp;&nbsp;&nbsp; :</label>
                    <select id="attendingPhysician" name="attendingPhysician">
                        <option value="physician1">Physician 1</option>
                        <option value="physician2">Physician 2</option>
                        {/* <!-- Add other physician options here --> */}
                    </select>

                    <input type="submit" value="Submit" />

                    <input type="submit" value="Cancel" onClick={() => clearForm()} />

                </form>
            </div>

            {/* <!-- Footer section Starts  --> */}
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

export default Files;
