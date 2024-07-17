import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import styles from './Modal.module.css';

function Modal({ isModalVisible, handleModalclose, children }) {
  useEffect(() => {
    function handleEscape(event) {
      if (event.key === 'Escape') {
        console.log('Escape a fost apasat');
        handleModalclose();
      }
    }

    document.body.addEventListener('keydown', handleEscape, false);

    return () => {
      document.body.removeEventListener('keydown', handleEscape, false);
    };
  }, [handleModalclose]);

  if (!isModalVisible) {
    return;
  }

  // console.log('is modal visible');

  return (
    <div className={styles.overlay}>
      <dialog id="modal" className={styles.modalClassName}>
        <h1>This is modal {children}</h1>
        <button
          className={styles.button}
          id="closeModal"
          onClick={() => handleModalclose()}
        >
          Close modal {children}
        </button>
      </dialog>
    </div>
  );
}

Modal.propTypes = {
  isModalOpen: PropTypes.bool,
  handleModalClose: PropTypes.func,
};

// export class Modal extends Component {
//   modalRef = createRef();
//   modalContentRef = createRef();

//   componentDidMount() {
//     document.body.addEventListener('mousedown', this.handleClickOutside);
//     document.body.addEventListener('keydown', this.handleKeyDown);
//   }

//   componentWillUnmount() {
//     document.body.removeEventListener('mousedown', this.handleClickOutside);
//     document.body.removeEventListener('keydown', this.handleKeyDown);
//   }

//   componentDidUpdate() {
//     console.log(this.props);

//     if (!this.modalRef?.current) {
//       return;
//     }

//     if (this.props.isVisible) {
//       this.modalRef.current.showModal();
//     } else {
//       this.modalRef.current.close();
//     }
//   }

//   handleModalClose = () => {
//     this.modalRef.current.close();
//   };

//   handleKeyDown = event => {
//     console.log(event.key);
//     if (event.key === 'Escape') {
//       this.handleModalClose();
//     }
//   };

//   handleClickOutside = event => {
//     // console.log(event.target);
//     if (
//       this.modalContentRef.current &&
//       !this.modalContentRef.current.contains(event.target)
//     ) {
//       this.handleModalClose();
//     }
//   };

//   render() {
//     const { isVisible } = this.props;

//     if (!isVisible) {
//       return;
//     }

//     return (
//       <dialog id="modal" className={styles.modalClassName} ref={this.modalRef}>
//         <div ref={this.modalContentRef}>
//           <h1>This is a modal.</h1>
//           <button
//             className={styles.button}
//             id="closeModal"
//             onClick={this.handleModalClose}
//           >
//             Close modal
//           </button>
//         </div>
//       </dialog>
//     );
//   }
// }

export default Modal;
