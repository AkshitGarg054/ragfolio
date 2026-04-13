# 📄 Telecom Customer Churn Prediction — RAG Knowledge Document

## Project Overview

Akshit Garg developed a comprehensive machine learning project focused on predicting customer churn in the telecom industry. Customer churn refers to the phenomenon where customers stop using a company’s service, which directly impacts revenue.

The goal of this project was to build a predictive system that can identify customers who are likely to churn so that businesses can take proactive retention measures. The project follows a complete machine learning lifecycle including data exploration, preprocessing, model building, evaluation, and comparison.

---

## Problem Statement (Expanded)

The telecom industry faces high competition, and retaining customers is significantly cheaper than acquiring new ones. Therefore, predicting churn is a critical business problem.

This project aims to:

* Analyze customer behavior patterns
* Identify key features influencing churn
* Build predictive models to classify customers into churn vs non-churn

---

## Dataset Understanding

The dataset used is the **Telco Customer Churn dataset (Kaggle)** with:

* 7043 rows
* 21 columns

### Feature Categories:

1. **Demographics**

   * Gender
   * Senior Citizen
   * Partner
   * Dependents

2. **Service Information**

   * Phone Service
   * Internet Service
   * Streaming services
   * Security services

3. **Account Information**

   * Contract type
   * Payment method
   * Monthly charges
   * Total charges

4. **Target Variable**

   * Churn (Yes/No → binary classification)

---

## Exploratory Data Analysis (EDA)

Akshit performed detailed exploratory analysis to understand patterns:

### Key Insights:

* **Class Imbalance**

  * ~26.6% churned customers
  * ~73.4% retained customers
    → Required SMOTE handling

* **Gender Impact**

  * No significant correlation with churn

* **Contract Type**

  * Month-to-month → highest churn
  * Long-term contracts → better retention

* **Tenure**

  * Lower tenure → higher churn probability

---

## Correlation Analysis

The project used statistical correlation techniques to understand feature relationships.

### Point Biserial Correlation:

Used to measure relationship between:

* numerical features (e.g., tenure)
* binary target (churn)

### Key Findings:

* Strong positive correlation:

  * Month-to-month contracts
  * Fiber optic internet
  * Monthly charges

* Strong negative correlation:

  * Tenure
  * Long-term contracts
  * Partner status

👉 Insight:
There is a **partially linear relationship**, which justifies using Logistic Regression.

---

## Data Preprocessing Pipeline

This project demonstrates strong ML engineering practices.

### Steps:

### 1. Data Cleaning

* Removed irrelevant column: `customerID`
* Converted `TotalCharges` to numeric
* Dropped null values

### 2. Encoding

* Binary encoding for Yes/No features
* One-hot encoding for:

  * Contract
  * Payment method
  * Internet service

### 3. Feature Splitting

* X → input features
* y → target (churn)

### 4. Handling Imbalance

* Applied **SMOTE**
  → Synthetic data generation for minority class

### 5. Train-Test Split

* 80% training
* 20% testing
* Stratified split for balanced distribution

### 6. Feature Scaling

* MinMax scaling applied

---

## Model Building

Akshit implemented multiple models to compare performance:

### Models Used:

1. Logistic Regression
2. Decision Tree
3. Random Forest
4. K-Nearest Neighbors (KNN)
5. XGBoost
6. Artificial Neural Network (ANN)

---

## Model Evaluation

### Metrics Used:

* Accuracy
* Precision
* Recall
* F1 Score
* ROC-AUC

### Results:

* Logistic Regression → high interpretability + strong performance
* Random Forest → strong generalization
* XGBoost → best ROC-AUC
* ANN → captures complex nonlinear patterns
* KNN → weakest performance

### Key Insight:

* Data had **linear tendencies → Logistic Regression performed very well**
* Complex models improved robustness

---

## Feature Importance Insights

Top features influencing churn:

* Monthly Charges
* Total Charges
* Tenure
* Contract Type
* Tech Support
* Online Security

---

## Engineering Strengths Demonstrated

This project reflects:

* End-to-end ML pipeline design
* Handling real-world issues like class imbalance
* Strong statistical understanding
* Model comparison and evaluation
* Ability to explain results clearly

---

## Real-World Impact

Such a system can help telecom companies:

* Identify high-risk customers
* Offer targeted retention strategies
* Reduce revenue loss
* Improve customer satisfaction

---

## Semantic Variations (for RAG)

* Built churn prediction system → Developed ML model to identify customer retention risk
* Used SMOTE → Balanced dataset using synthetic oversampling
* Compared ML models → Evaluated multiple algorithms for classification
* Telecom churn → Customer attrition in telecom services
* Feature importance → Identified key drivers affecting churn

---

## Likely Questions This Enables Your Chatbot To Answer

* “Explain your churn prediction project”
* “What ML models have you used?”
* “How did you handle class imbalance?”
* “Why did logistic regression work well?”
* “What is SMOTE?”
* “What features affect customer churn?”
* “Have you worked with real datasets?”
* “How do you evaluate ML models?”

---
