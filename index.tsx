import React, { useState } from 'react';
import PropTypes from 'Prop-type';
import Button from '../button'

//export defult function Track ({ imageUrl, title, artist, toggleSelect }) {
// Const [inSelected, setInSelected] = useState(false);
interface IProps {
 imageUrl: string;
 title: string;
 artist: string;
 toggleSelect: () -> void;
}

const Track: React.FC<Props> = ({ imageUrl, title, artist, toggleSelect }) => {
// const [isSelected, setInSelected] = useState<boolean> (select);

const handleToggleSelect = () => void () => {
    setIsSelected(IsSelected);
    toggleSelect();
}