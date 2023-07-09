import { useFormik } from "formik";
import "./App.css";
import Field from "./Field";

export default function App() {
    const REGEX = {
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    };

    const validate = (values) => {
        const errors = {};
        const REQUIRED_FIELD = [
            "name",
            "identityNumber",
            "birth",
            "nation",
            "province",
            "district",
            "ward",
            "address",
            "phone",
            "email",
        ];
        REQUIRED_FIELD.forEach((field) => {
            if (!values[field]) {
                errors[field] = "Required";
            }
        });
        if (values.birth <= 1900) {
            errors.birth = "Error birth year!!!";
        }
        if (!REGEX.email.test(values.email)) {
            errors.email = "Invalid email address";
        }
        return errors;
    };

    const formik = useFormik({
        initialValues: {
            name: "",
            identityNumber: "",
            birth: "",
            gender: 0,
            nation: "",
            company: "",
            position: "",
            healthCard: false,
            province: "",
            district: "",
            ward: "",
            address: "",
            phone: "",
            email: "",
            question1: "",
            question2: [],
            question3: [],
        },
        validate,
        onSubmit: (values) => {
            console.log(values);
            alert("Gửi thành công");
            formik.resetForm();
        },
        validateOnChange: false,
        validateOnBlur: false,
    });

    const FIELDS = [
        {
            label: "Họ tên",
            fieldName: "name",
        },
        {
            label: "Số hộ chiếu /CMND",
            fieldName: "identityNumber",
        },
        {
            label: "Năm sinh",
            fieldName: "birth",
        },
        {
            label: "Giới tính",
            fieldName: "gender",
            inner: (
                <>
                    <label className="gender">
                        <input
                            type="radio"
                            name="gender"
                            value="0"
                            checked={formik.values.gender === 0}
                            onChange={() => formik.setFieldValue("gender", 0)}
                        />
                        <span>Nam</span>
                    </label>
                    <label className="gender">
                        <input
                            type="radio"
                            name="gender"
                            value="1"
                            checked={formik.values.gender === 1}
                            onChange={() =>
                                formik.setFieldValue("gender", 1, false)
                            }
                        />
                        <span>Nữ</span>
                    </label>
                </>
            ),
        },
        {
            label: "Quốc tịch",
            fieldName: "nation",
        },
        {
            label: "Công ty làm việc",
            fieldName: "company",
        },
        {
            label: "Bộ phận làm việc",
            fieldName: "company",
        },
        {
            label: "",
            fieldName: "healthCard",
            inner: (
                <label className="healthCard">
                    Có thẻ bảo hiểm y tế
                    <input
                        type="checkbox"
                        name="healthCard"
                        value="1"
                        checked={formik.values.healthCard}
                        onChange={() =>
                            formik.setFieldValue(
                                "healthCard",
                                !formik.values.healthCard,
                                false
                            )
                        }
                    />
                </label>
            ),
        },
        {
            label: "Địa chỉ liên lạc tại Việt Nam",
            fieldName: "nofield",
            inner: <></>,
            style: "b",
        },
        {
            label: "Tỉnh thành",
            fieldName: "province",
        },
        {
            label: "Quận /huyện",
            fieldName: "district",
        },
        {
            label: "Phường /xã",
            fieldName: "ward",
        },
        {
            label: "Số nhà, phố, tổ dân phố /thôn /đội",
            fieldName: "address",
        },
        {
            label: "Điện thoại",
            fieldName: "phone",
        },
        {
            label: "Email",
            fieldName: "email",
        },
        {
            label: "Trong vòng 14 ngày qua, Anh /Chị có đến quốc gia, vùng lãnh thổ nào (Có thể đi nhiều quốc gia)",
            fieldName: "question1",
            style: "b",
            inner: (
                <textarea
                    name="question1"
                    value={formik.values.question1}
                    onChange={formik.handleChange}></textarea>
            ),
        },
        {
            label: "Trong vòng 14 ngày qua, Anh /Chị có thấy xuất hiện dấu hiệu nào sao đây không?",
            fieldName: "question2",
            style: "b",
            inner: (
                <>
                    {[
                        "Sốt",
                        "Ho",
                        "Khó thở",
                        "Viêm phổi",
                        "Đau họng",
                        "Mệt mỏi",
                    ].map((item, index) => (
                        <label
                            className="question"
                            key={index}>
                            <input
                                type="checkbox"
                                name="question2"
                                value={item}
                                onChange={formik.handleChange}
                            />
                            <span>{item}</span>
                        </label>
                    ))}
                </>
            ),
        },
        {
            label: "Trong vòng 14 ngày qua, Anh /Chị có tiếp xúc với?",
            fieldName: "question3",
            style: "b",
            inner: (
                <>
                    {[
                        "Người bị bệnh hoặc nghi ngờ, mắc bệnh COVID-19",
                        "Người từ nước ngoài có bệnh COVID-19",
                        "Người có biểu hiện (Số, ho, khó thở, viêm phổi",
                    ].map((item, index) => (
                        <label
                            className="question"
                            key={index}>
                            <input
                                type="checkbox"
                                name="question3"
                                value={item}
                                onChange={formik.handleChange}
                            />
                            <span>{item}</span>
                        </label>
                    ))}
                </>
            ),
        },
    ];

    return (
        <form
            className="container"
            onSubmit={formik.handleSubmit}>
            <h1>Tờ khai y tế</h1>
            {FIELDS.map((item, index) => (
                <Field
                    key={index}
                    formik={formik}
                    label={item.label}
                    fieldName={item.fieldName}
                    inner={item.inner}
                    styleTag={item.style}
                />
            ))}
            <button type="submit">Gửi khai báo</button>
        </form>
    );
}
