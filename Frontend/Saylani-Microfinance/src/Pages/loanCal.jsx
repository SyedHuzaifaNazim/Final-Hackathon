import React, { useState, useEffect } from 'react';
import { Form, InputNumber, Select, Card, Button, Typography, Alert } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';

const LoanCalculator = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const category = location.state?.category; // Optional chaining

  const calculateMonthlyPayment = (values) => {
    const amount = values.amount || 0;
    const years = values.period || 1;
    const months = years * 12;
    const payment = amount / months;
    setMonthlyPayment(payment);
  };

  const onFinish = (values) => {
    navigate('/loan-form', {
      state: {
        loanDetails: {
          ...values,
          monthlyPayment,
          category: category?.id, // Optional chaining
        },
      },
    });
  };

  return (
    <div className="p-6" style={{ backgroundColor: '#f0f2f5', padding: '20px' }}>
      <Card
        title={<Title level={2} style={{ color: '#1890ff' }}>Loan Calculator</Title>}
        bordered={false}
        style={{ backgroundColor: '#fff', borderRadius: '8px' }}
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          onValuesChange={calculateMonthlyPayment}
          initialValues={{
            category: category?.id, // Optional chaining
            subcategory: undefined,
            amount: 0,
            period: 1,
          }}
        >
          <Form.Item
            name="subcategory"
            label="Loan Purpose"
            rules={[{ required: true, message: 'Please select loan purpose' }]}
          >
            <Select style={{ width: '100%', borderRadius: '4px' }}>
              {category?.subcategories?.map((sub) => ( // Optional chaining
                <Option key={sub} value={sub}>
                  {sub}
                </Option>
              ))}
            </Select>
          </Form.Item>

          {/* ... other form items */}

          {monthlyPayment > 0 && (
            <Alert
              message="Monthly Payment Estimate"
              description={<Text strong>PKR {monthlyPayment.toFixed(2)} per month</Text>}
              type="info"
              showIcon
              style={{ backgroundColor: '#f0f2f5', border: 'none', borderRadius: '4px' }}
              className="mb-4"
            />
          )}

          <Form.Item>
            <Button type="primary" htmlType="submit" block style={{ borderRadius: '4px', backgroundColor: '#1890ff' }}>
              Proceed with Application
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default LoanCalculator;