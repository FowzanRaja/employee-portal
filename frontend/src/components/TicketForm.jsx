import { useState } from 'react';

export default function TicketForm({ onSubmit }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [priority, setPriority] = useState('medium');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !content) {
      alert('Please fill all fields');
      return;
    }

    onSubmit({
      title,
      content,
      priority,
      date: new Date().toLocaleDateString(),
    });

    setTitle('');
    setContent('');
    setPriority('medium');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <input
        type="text"
        placeholder="Title"
        className="w-full mb-2 p-2 border border-gray-700 rounded bg-[#1a1a1a] text-white focus:outline-none focus:ring-2 focus:ring-lime-500"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Description"
        className="w-full mb-2 p-2 border border-gray-700 rounded bg-[#1a1a1a] text-white focus:outline-none focus:ring-2 focus:ring-lime-500"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <select
        className="w-full mb-4 p-2 border border-gray-700 rounded bg-[#1a1a1a] text-white focus:outline-none focus:ring-2 focus:ring-lime-500"
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option value="low" className="text-black">Low</option>
        <option value="medium" className="text-black">Medium</option>
        <option value="high" className="text-black">High</option>
      </select>

      <button className="bg-lime-500 text-white px-4 py-2 rounded hover:bg-lime-600 transition">
        Submit Ticket
      </button>
    </form>
  );
}