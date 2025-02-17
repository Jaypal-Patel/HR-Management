import { Button, DatePicker, Form, Input, Space } from "antd";
import React from "react";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import dayjs from "dayjs";

const EmployeeExperience = ({ key, restField, remove, name }) => {
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
          name={[name, "position"]}
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          label="Position At"
          className="mb-2 flex flex-col gap-0.5"
          rules={[
            {
              required: true,
              message: "Missing  Position At",
            },
          ]}
        >
          <Input placeholder="abcd" />
        </Form.Item>
        <Form.Item
          {...restField}
          name={[name, "company"]}
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          label="Company Name"
          className="mb-2 flex flex-col gap-0.5"
          rules={[
            {
              required: true,
              message: "Missing Company Name",
            },
          ]}
        >
          <Input placeholder="abcd" />
        </Form.Item>

        <Form.Item
          {...restField}
          name={[name, "year"]}
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          label="Year"
          className="mb-2 flex flex-col gap-0.5"
          rules={[{ required: true, message: "Missing Year " }]}
        >
          <DatePicker className="date-picker hr-staffs-date-picker" />
        </Form.Item>

        <Form.Item
          {...restField}
          name={[name, "exCountry"]}
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          label="Country"
          className="mb-2 flex flex-col gap-0.5"
          rules={[{ required: true, message: "Missing Country" }]}
        >
          <Input placeholder="abcd" />
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

export default EmployeeExperience;
