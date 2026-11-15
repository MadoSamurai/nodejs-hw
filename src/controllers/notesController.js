import { Note } from '../models/note.js';
import httpError from 'http-errors';
export const getNotes = async (req, res) => {
  const notes = await Note.find();
  res.status(200).json({
    body: notes,
    message: 'Retrieved all notes',
  });
};

export const getNoteById = async (req, res) => {
  const { noteId } = req.params;
  const note = await Note.findOne({ _id: noteId });
  if (!note) {
    throw httpError(404, 'Note not found');
  }
  res.status(200).json({
    body: note,
    message: `Retrieved note with ID: ${noteId}`,
  });
};

export const createNote = (reg, res) => {
  res.status(201).json({
    id: Date.now(),
    ...reg.body,
  });
};

export const updateNote = (reg, res) => {
  res.status(200).json({});
};

export const deleteNote = (reg, res) => {
  res.status(200).json({});
};

export const first = (second) => {
  third;
};
