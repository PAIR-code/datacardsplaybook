<!-- info: This model card template was
derived for usage at Zalando based on existing
[Huggingface](https://huggingface.co/docs/hub/model-cards) and
[Google](https://modelcards.withgoogle.com/about) templates.
-->

<h1>Model Name (Acronym)</h1>

Model card contributions and feedback are welcome!

## Template Version
<!-- scope: telescope -->
<!-- info: link to model card version - we recommend using git tags / releases -->
[0.2.2]()

## Overview

#### Last Update
<!-- info: Remember to add reference to version control document or system. -->
**DD/MM/YY**

#### Model Card Author(s)
<!-- info: Authors should get credit in overview section

Select one or more roles per author and reference author's
emails to ease communication and add transparency. -->

- **Name, Team:** (Owner / Contributor / Manager)
- **Name, Team:** (Owner / Contributor / Manager)
- **Name, Team:** (Owner / Contributor / Manager)

## Model Overview
* Description
<!-- info: Brief (max 200 words) description of the model architecture and the task(s) it was trained to solve. -->

#### Status
<!-- scope: telescope -->
<!-- info: Select **one:** -->
**Status Date:** DD/MM/YYYY

**Under Preparation** - The model is still under active development
and is not yet ready for use due to active "dev" updates.

**Regularly Updated** - New versions of the model
have been or will continue to be made available.

**Actively Maintained** - No new versions will be made
available, but this model will
be actively maintained.

**Limited Maintenance** - The model will not be updated,
but any technical issues will be
addressed.

**Deprecated** - This model is obsolete or is
no longer being maintained.

### Developers
- **Name, Team**
- **Name, Team**

### Owners
<!-- info: Remember to reference developers and owners emails. -->
- **Team Name, Contact Person**

### Risk classification

<!-- info: Use the AI Act risk classification criteria found here: http://ai-act.eu/risk.
Reference assesment document if possible. -->
- High / Limited / Minimal

### Version Details and Artifacts
<!-- scope: periscope -->
<!-- info: Provide details about the current model version
and which model version the current model card corresponds to.

For models without version number, use "Not currently tracked"
but be sure to track the release date of the model.
-->
**Current Model Version:**

**Model Version Release Date:**

**Model Version for last Model Card Update:**

**Artifacts:**


- Model weights (e.g. S3 bucket path)
- Model config (e.g. S3 bucket path)

### Github
<!-- info: Remember to link repositories. -->
- Repository_1
- Repository_2

### References
Example references:

- Paper/Documentation Link
- Initiative Link
- API Link

## Intended Use and Known Applications
#### Intended Use
<!-- info: This section focuses on the initial purpose and/or reasoning
for creating the model.-->

* Description

#### Known Applications
<!-- info: Fill out the following section if the model has any
current known usages.
-->

| **Application**   | **Purpose of Model Usage**                                                 | **[AI Act Risk](https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai)** |
|-------------------|----------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| [Application 1]() | Foundation model providing customer embeddings for fraud detection scoring | High                                                                                         |
| [Application 2]() | Customer embeddings used directly as features for recommendation engine    | Limited                                                                                      |

Note, this table may not be exhaustive.  Model users and documentation consumers at large
are highly encouraged to contribute known usages.

#### Out Of Scope Uses
Provide potential applications and/or use cases for which use of the model is not suitable.

## Risks and Ethical Considerations
This section should cover topics related to known biases, security, privacy and other risks related to use of the model. Please provide an introductory paragraph before listing risks and cosnsiderations. Such introduction should explain
how the risks / ethical considerations were identified
and wheter, and if so which, risks teams were involved in identifying the issues and coming up with the mitigation strategies.

#### Risk / Consideration

Description

**Mitigation strategy**:

Description

#### Risk / Consideration

Description

**Mitigation strategy**:

Description

## Training
<!-- info: This section should include overview regarding training process such as training dataset(s), training task (ex. next token prediciton, pixel-wise classification). -->

### Datasets
Datasets should be compiled in a table with columns and rows:

| Name  | Location | Sensitive*  | Size   | Documentation
|---|---|---|---|---|
Name | Location (e.g. S3 bucket) | Yes / No | # of samples | Link (e.g. Dataset Card)


(*): Requires a special Data Processing Request
## Evaluation
<!-- info: Remember to reference metrics definitions and results variance (if available.) -->
This section should include overview of evaluation process such as evaluation dataset(s), metrics and quantitive results.


### Datasets
Datasets should be compiled in a table with columns and rows:

| Name  | Location | Sensitive*  | Size   | Documentation
|---|---|---|---|---|
Name | Location (e.g S3 bucket) | Yes / No | # of samples | Link (e.g Dataset Card)

(*): Requires a special Data Processing Request

### Quantitive Results
<!-- info: Please provide rationales for selected metrics.  -->
* Dataset:
    * **Metric: Result**
    * **Metric: Result**

* Dataset:
    * **Metric: Result**
    * **Metric: Result**

## Caveats and Recommendations
This section should cover shortcomings and recommendations related to current approach such as:

* scalability
* robustness
* deployment safety and readiness
* training / evaluation data


Additionaly plans or ideas for future work could be discussed (e.g. incorporate new data source or use a bigger model).

## Energy Requirements
<!-- scope: telescope -->
<!-- info: estimate the total energy footprint of this model.-->

| Category                            | Estimated footprint       |
|-------------------------------------|---------------------------|
| Total training time                 | 118 days, 5 hours, 41 min |
| Total number of GPU hours           | 1,082,990 hours           |
| Total energy used                   | 433,196 kW                |
| GPU models used                     | Nvidia A100 80GB          |
| Carbon intensity of the energy grid | 57 gCO2eq/kWh             |

Example taken directly from [Luccioni et al.](https://arxiv.org/pdf/2211.02001.pdf).
