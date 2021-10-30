/* eslint-disable */
import React from "react";
import './Comment.css';
// import PropTypes from 'prop-types';

interface Props { // Объявление интерфейсов пропсов
   name?: string;
   text?: string;
   addLike?: () => void;
   removeLike?: () => void;
}

interface State {
   liked: boolean
}

export default class Comment extends React.Component<Props, State> {
   constructor(props: Props) {
      super(props);
      this.handleLike = this.handleLike.bind(this); // Привязываем this к методам
      this.state = { liked: false };
   }

   // Функция Лайк
   handleLike() {
      // @ts-ignore
      // this.state.liked = !this.state.liked; // Без setState не работает
      !this.state.liked
         ? this.props.addLike && this.props.addLike()
         : this.props.removeLike && this.props.removeLike();
      this.setState({
         liked: !this.state.liked
      });
   }

   render() {
      return (
         <div className="comments-form">
            <div className="comment__name">{this.props.name || 'Незнакомец'}</div>
            <div className={`comment__text ${this.state.liked && 'text-liked'}`}>{this.props.text || '-'}</div>
            <div className={`comment__like ${this.state.liked && 'text-liked'}`}
               onClick={this.handleLike}>
               {this.state.liked ? 'Лайкнуто' : 'Не лайкнуто'}
            </div>
         </div>
      );
   }
}

// Comment.propTypes = {
//    name: PropTypes.string,
//    text: PropTypes.string,
//    array: PropTypes.array,
//    arrayType: PropTypes.arrayOf(PropTypes.string), // Типизированный массив
//    bool: PropTypes.bool,
//    func: PropTypes.func,
//    num: PropTypes.number,
//    obj: PropTypes.object,
//    reactElem: PropTypes.element, // Экземпляр react элемента
//    reactClass: PropTypes.elementType, // Экземпляр react элемента
//    inst: PropTypes.instanceOf(Comment), // Экземпляр конкретного класса
//    optionalEnum: PropTypes.oneOf([`one, two`]), // Один из вариантов
//    optionalUnion: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // Один из типов
//    struct: PropTypes.shape({
//       name: PropTypes.string,
//       age: PropTypes.number
//    })
// }