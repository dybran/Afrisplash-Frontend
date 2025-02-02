import * as yup from "yup"


export const CreateJobSchema = {
  stepOne:yup.object().shape({
    title:yup.string().required('Job Title is required'),
    industry:yup.string().required('Job Industry is required'),
    description:yup.string().required('Job Describtion is required')
  }),
  stepTwo:yup.object().shape({
    requirement: yup.string().required('Job Requirement is required'),
    experience: yup.string().required('Experience level is required'),
    type:yup.string().required('Job Type is required'),
    benefits:yup.string().required('Benefits is required'),
  
  }),
  stepThree:yup.object().shape({
    location:yup.string().required('Job Location is required'),
    gender:yup.string().required('Gender is required'),
    salary:yup.string().required('Salary is required'),
    paymentPeriod:yup.string().required('Payment Period is required')
  })
}


export type StepOne = yup.InferType<(typeof CreateJobSchema)['stepOne']>
export type StepTwo = yup.InferType<(typeof CreateJobSchema)['stepTwo']>
export type StepThree = yup.InferType<(typeof CreateJobSchema)['stepThree']>
