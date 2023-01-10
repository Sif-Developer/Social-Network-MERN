import { Button, Form, Select, Input } from "antd";

const AddPost = () => {
    const { Option } = Select;
    
    const onFinish = (values) => {
        console.log("Received values of form: ", values);
    };
    
    return (
        <Form onFinish={onFinish}>

      <Form.Item label="Post title" name="name">
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
  );
};


export default AddPost;