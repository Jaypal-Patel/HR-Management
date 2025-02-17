import { Button, DatePicker, Form, Input, Space } from "antd";
import React from "react";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import dayjs from "dayjs";

const EmployeeEducationForm = ({ key, restField, remove, name }) => {
  return (
    <div>
      <Space
        key={key}
        style={{
          // display: "flex",

          // justifyContent: "space-between",
          display: "grid",
          gridColumn: "2",
          marginBottom: 8,
        }}
        align="baseline"
      >
        <Form.Item
          {...restField}
          name={[name, "academicEdu"]}
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          label="Academic Education"
          className="mb-2 flex flex-col gap-0.5"
          rules={[
            {
              required: true,
              message: "Missing  Academic Education",
            },
          ]}
        >
          <Input placeholder="abcd" />
        </Form.Item>
        <Form.Item
          {...restField}
          name={[name, "technicalEdu"]}
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          label="Technical Education"
          className="mb-2 flex flex-col gap-0.5"
          rules={[
            {
              required: true,
              message: "Missing Technical Education",
            },
          ]}
        >
          <Input placeholder="abcd" />
        </Form.Item>
        <Form.Item
          {...restField}
          name={[name, "specialization"]}
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          label="Specialization"
          className="mb-2 flex flex-col gap-0.5"
          rules={[{ required: true, message: "Missing Specialization" }]}
        >
          <Input placeholder="abcd" />
        </Form.Item>

        <Form.Item
          {...restField}
          name={[name, "completYear"]}
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          label="Year of Completion"
          className="mb-2 flex flex-col gap-0.5"
          rules={[{ required: true, message: "Missing Year of Completion" }]}
        >
          <DatePicker placeholder="Year of Completion" />
        </Form.Item>

        <MinusCircleOutlined
          className="txt-color"
          style={{ fontSize: "150%" }}
          onClick={() => remove(name)}
        />
      </Space>
    </div>
  );
};

export default EmployeeEducationForm;
