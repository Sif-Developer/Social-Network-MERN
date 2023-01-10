import { useSelector } from "react-redux";

import { Button, Modal, Form, InputNumber, Select, Input } from "antd";

const EditModal = ({ visible, setVisible }) => {
  const { Option } = Select;

  const { genres } = useSelector((state) => state.genres);

  const selectOption = genres.map((genre) => {
    return (
      <Option key={genre.id} value={genre.id}>
        {genre.name}
      </Option>
    );
  });

  const onFinish = (values) => {
    console.log(values);

    setVisible(false);
  };

  return (
    <Modal title="Edit Book" visible={visible} footer={[]}>
      <Form onFinish={onFinish}>
        <Form.Item label="Post title" name="title">
          <Input placeholder="Post title" />
        </Form.Item>

        <Form.Item label="Post Body" name="body">
          <Input placeholder="Post body" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditModal;
