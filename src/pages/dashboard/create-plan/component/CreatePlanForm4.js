import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

export default function CreatePlanForm4({
  setFormData,
  setCurrentStep,
  currentStep,
  formData,
}) {
  const schema = yup.object().shape({
    PDPA: yup
      .boolean()
      .oneOf([true], "Please tick this box") // Ensure the value is true
      .required("Please tick this box"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("🚀 ~ file: CreatePlanForm4.js:23 ~ onSubmit ~ data:", data);
    // setCurrentStep(currentStep + 1);
    const newData = {
      ...formData,
      PDPA: data.PDPA,
    };
    setFormData(newData);
  };
  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
  };
  return (
    <>
      <div className=" bg-white py-4 text-left ">
        <div className="py-8 border-b border-grayLine text-left">
          <div className="text-body1 text-grayLine  px-4">Will Plan Form</div>
          <div className=" text-darkText font-bold text-[18px] px-4 mt-[10px]">
            Personal Data Protection A
          </div>
        </div>
        <div className="px-4 mt-[30px]">
          <div className="text-body1 text-darkText ">
            Dear Valued Customer, Personal Data Protection Act 2010 PACIFIC
            TRUSTEES BERHAD (“PTB”) places great importance on keeping up with
            the legal and regulatory changes. In line with the Personal Data
            Protection Act 2010, we would like to inform and update you in
            regard to your personal information that we may process, and in the
            manner in which we do so. Kindly note that PTB processes your
            personal information, such as details on your contact numbers,
            background and other information relevant to your arrangements/
            participation/ contract/ agreements/ deeds/ appointments, which you
            may have previously provided directly to PTB or through contact with
            our corporate communications and/or departments (including business
            development and finance & administration teams). We may also have
            obtained your personal information from your participation at our
            events (including seminars and corporate meetings/functions) and
            through the provision of services by PTB. Please be informed that
            your personal information, e.g. name, title, designation, employer,
            address, e-mail address, telephone and facsimile numbers, are being
            processed by PTB for the following purposes (“Purpose”):- providing
            PTB’s products and/or services which you have appointed and/or
            arranged for PTB to so do and notification on important changes or
            developments in such products and/or services (including features
            thereof); updating and managing the accuracy of PTB’s records and
            databases (including Customer Relation Management); conducting
            assessment and analysis, including market and product/ service
            evaluation and market research (if any); cross-selling, marketing
            and promotions of PTB’s products and/or services; providing
            information as may be required by the relevant authorities/
            regulatory bodies which regulate and/or request licences for PTB’s
            existing and/or future products and/or services; maintaining
            communications and ensuring customer satisfaction, responding to
            enquiries and complaints, and generally resolving disputes; and
            maintaining your information history for present and future
            reference (if any). Your personal information may be disclosed to
            other companies, service providers including legal firms, government
            agencies, other financial institutions and any of their respective
            agents, servants and/or such persons, whether located within or
            outside of Malaysia for the stipulated Purpose. Subject to any
            prohibition by any regulatory requirements binding on PTB in
            relation to your personal information, you may request for access
            to, correction or deletion of your personal information, or limit
            the processing thereof (including personal data of others provided
            by you) at any time. Any enquiry or complaint with respect to your
            personal information should be directed to PTB via post, email or
            facsimile transmission, at the following address: PACIFIC TRUSTEES
            BERHAD(Attention: Customer Care Unit)Unit A-9-8, Level 9, Block A,
            Megan Avenue 1,No. 189, Jalan Tun Razak,Off Persiaran
            Hampshire,50400 Kuala Lumpur.Tel: +603-2166 8830Fax: +603-2166
            3830Email: customercare@pacifictrustees.com We trust that you
            consent and agree to the preceding terms with respect to our
            processing of your personal information. If you do not consent to
            the above, kindly contact and inform us through the abovementioned
            contact details or you may visit our website at
            www.pacifictrustees.com for more information. THIS IS A
            COMPUTER-GENERATED CONFIRMATION AND DOES NOT REQUIRE A SIGNATURE
          </div>
        </div>
        <div className="mt-[30px]">
          <label className="flex items-center">
            <input
              type="checkbox"
              {...register("PDPA")}
              defaultChecked={formData.PDPA}
              //   checked={isSupplementary}
              //   onChange={handleSupplementaryChange}
              className="form-checkbox h-5 w-5 text-redPrimary checked:bg-redPrimary border-grayLine"
            />
            <span className="ml-2 text-sub1 text-darkText">
              I have read and agree to your Personal Data Protection Notice
              stated above
            </span>
          </label>
          <p className=" ml-7 text-body2 text-error">{errors.PDPA?.message}</p>
        </div>
      </div>
      <div className="flex justify-end gap-4 my-[20px]">
        {currentStep !== 1 && (
          <button
            onClick={handlePrevious}
            className=" px-4 py-2 border border-grayLine bg-white hover:bg-defaultBg text-darkText rounded-md "
          >
            Previous
          </button>
        )}
        <button
          onClick={handleSubmit(onSubmit)}
          type="button"
          className="  items-center w-[200px] px-4 py-2 border  shadow-sm text-sm font-medium rounded-md text-white bg-redPrimary hover:bg-redSecondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-redPrimary"
        >
          Submit and pay
        </button>
      </div>
    </>
  );
}
