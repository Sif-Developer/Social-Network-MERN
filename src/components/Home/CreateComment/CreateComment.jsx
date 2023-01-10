// import { useDispatch } from 'react-redux';
// import { Button, Input, Modal } from 'antd';
// import { comment } from './actions'; 
// import { useState } from 'react';

// const AddCommentButton = () => {
//   const dispatch = useDispatch(); 
//   const [visible, setVisible] = useState(false);
//   const [commentText, setCommentText] = useState(''); 
//   const [postId, setPostId] = useState(''); 

//   const showModal = () => {
//     setVisible(true);
//   };

//   const handleCancel = () => {
//     setVisible(false);
//   };

//   const handleOk = () => {
//    
//     const newComment = {
//       text: commentText,
//       postId: postId,
//     };

//     dispatch(comment(newComment));
//     setVisible(false);
//   };

//   return (
//     <div>
//       <Button type="primary" onClick={showModal}>
//         Add Comment
//       </Button>
//       <Modal
//         title="Add a Comment"
//         visible={visible}
//         onOk={handleOk}
//         onCancel={handleCancel}
//       >
//         <Input
//           placeholder="Enter the post id"
//           value={postId}
//           onChange={(e) => setPostId(e.target.value)}
//         />
//         <Input
//           placeholder="Enter your comment"
//           value={commentText}
//           onChange={(e) => setCommentText(e.target.value)}
//         />
//       </Modal>
//     </div>
//   );
// };

// export default AddCommentButton;