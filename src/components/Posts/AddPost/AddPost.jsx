import { Button, Form, Select, Input } from "antd";
import { useDispatch } from "react-redux";
import { createPost } from "../../../features/posts/postsSlice";


    
    const AddPost = () => {
        const dispatch = useDispatch()
    
        const onFinish = (values) => {
            dispatch(createPost(values))
        };

    return (
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
  );
};


export default AddPost;