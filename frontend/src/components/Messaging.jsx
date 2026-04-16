import React, { useEffect, useRef, useState } from "react";
import { formatTime } from "../lib/time";
import SampritiImg from "../assets/pfp images/Sampriti.jpeg";
import FowzanImg from "../assets/pfp images/Fowzan.jpeg";
import AhmadImg from "../assets/pfp images/Ahmad.jpeg";
import SuhanImg from "../assets/pfp images/Suhan.png";
import AlexanderImg from "../assets/pfp images/Alexander.jpeg";

const ME_ID = "me";

const seededPeople = [
  { id: "sampriti", name: "Sampriti Patro", avatar: SampritiImg },
  { id: "fowzan", name: "Fowzan Raja", avatar: FowzanImg },
  { id: "ahmad", name: "Ahmad Ahmadzai", avatar: AhmadImg },
  { id: "suhan", name: "Suhan Erbil", avatar: SuhanImg },
  { id: "alex", name: "Alexander Michael-Iacovou", avatar: AlexanderImg },
];

function makeSampleMessages(person) {
  const now = Date.now();
  switch (person.id) {
    case "sampriti":
      return [
        { id: `${person.id}-1`, sender: "them", text: `Hey — this is ${person.name}. I uploaded the onboarding docs to the portal. Could you take a look?`, ts: new Date(now - 2 * 24 * 60 * 60 * 1000).toISOString() },
        { id: `${person.id}-2`, sender: ME_ID, text: `Thanks — I'll review the docs this afternoon.`, ts: new Date(now - 24 * 60 * 60 * 1000).toISOString() },
        { id: `${person.id}-3`, sender: "them", text: `Also added a short bio and photo — let me know if it looks ok.`, ts: new Date(now - 2 * 60 * 60 * 1000).toISOString() },
      ];
    case "fowzan":
      return [
        { id: `${person.id}-1`, sender: "them", text: `Hi — quick heads up: payroll export had a mismatch for April. Can you check?`, ts: new Date(now - 5 * 24 * 60 * 60 * 1000).toISOString() },
        { id: `${person.id}-2`, sender: ME_ID, text: `I'll pull the logs and follow up in an hour.`, ts: new Date(now - 6 * 60 * 60 * 1000).toISOString() },
        { id: `${person.id}-3`, sender: "them", text: `Thanks — I highlighted the rows I believe are affected.`, ts: new Date(now - 45 * 60 * 1000).toISOString() },
      ];
    case "ahmad":
      return [
        { id: `${person.id}-1`, sender: "them", text: `There is a 500 error when submitting the ticket form with attachments. Repro steps attached.`, ts: new Date(now - 36 * 60 * 60 * 1000).toISOString() },
        { id: `${person.id}-2`, sender: ME_ID, text: `Got it — I'm testing the upload flow now.`, ts: new Date(now - 20 * 60 * 60 * 1000).toISOString() },
        { id: `${person.id}-3`, sender: "them", text: `Appreciate it — let me know if you need server logs.`, ts: new Date(now - 10 * 60 * 1000).toISOString() },
      ];
    case "suhan":
      return [
        { id: `${person.id}-1`, sender: "them", text: `Can we move the programme sync to Tuesday? I'm out Monday.`, ts: new Date(now - 7 * 24 * 60 * 60 * 1000).toISOString() },
        { id: `${person.id}-2`, sender: ME_ID, text: `Tuesday works — I'll send an invite.`, ts: new Date(now - 4 * 24 * 60 * 60 * 1000).toISOString() },
        { id: `${person.id}-3`, sender: "them", text: `Great — thanks. I'll prepare the agenda.`, ts: new Date(now - 3 * 60 * 60 * 1000).toISOString() },
      ];
    case "alex":
      return [
        { id: `${person.id}-1`, sender: "them", text: `We're launching the new campaign next week — need the hero images and copy.` , ts: new Date(now - 2 * 24 * 60 * 60 * 1000).toISOString() },
        { id: `${person.id}-2`, sender: ME_ID, text: `Sharing the draft assets in this chat shortly.`, ts: new Date(now - 30 * 60 * 60 * 1000).toISOString() },
        { id: `${person.id}-3`, sender: "them", text: `Awesome — can't wait to see them.`, ts: new Date(now - 60 * 60 * 1000).toISOString() },
      ];
    default:
      return [
        { id: `${person.id}-1`, sender: "them", text: `Hey — this is ${person.name}.`, ts: new Date(now - 1000 * 60 * 60 * 24).toISOString() },
      ];
  }
}

export default function Messaging() {
  const [conversations, setConversations] = useState(() =>
    seededPeople.map((p) => ({
      person: p,
      messages: makeSampleMessages(p),
    }))
  );

  const [activeIdx, setActiveIdx] = useState(0);
  const lastSentRef = useRef({ text: null, ts: 0 });
  const [query, setQuery] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const messagesEndRef = useRef(null);
  const threadRef = useRef(null);
  const inputContainerRef = useRef(null);
  const prevActiveRef = useRef(activeIdx);

  useEffect(() => {
    const el = threadRef.current;
    const wasActiveChanged = prevActiveRef.current !== activeIdx;
    prevActiveRef.current = activeIdx;

    if (!el) {
      scrollToBottom();
      return;
    }

    const distanceFromBottom = el.scrollHeight - el.scrollTop - el.clientHeight;
    const isNearBottom = distanceFromBottom < 120;

    if (wasActiveChanged) {
      scrollToBottom();
      return;
    }

    // Only auto-scroll on new messages if the user is near the bottom
    if (isNearBottom) scrollToBottom();
  }, [activeIdx, conversations]);

  function scrollToBottom() {
    scrollToBottomImmediate();
  }

  function scrollToBottomImmediate() {
    const el = threadRef.current;
    if (el) {
      try {
        const inputH = inputContainerRef.current ? inputContainerRef.current.offsetHeight : 0;
        const extra = inputH + 12; // small gap so last message isn't flush to the input
        const target = Math.max(0, el.scrollHeight - el.clientHeight - extra);
        el.scrollTo({ top: target, behavior: "smooth" });
      } catch (err) {
        el.scrollTop = el.scrollHeight;
      }
    } else if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }

  const filtered = conversations.filter((c) =>
    c.person.name.toLowerCase().includes(query.toLowerCase())
  );

  function handleSearchKeyDown(e) {
    if (e.key === "Enter") {
      const val = searchInput.trim();
      if (!val) return;
      // prefer first seeded person or existing conversation match
      const seeded = seededPeople.find((p) => p.name.toLowerCase().includes(val.toLowerCase()));
      const convIdx = conversations.findIndex((c) =>
        c.person.name.toLowerCase().includes(val.toLowerCase())
      );
      if (convIdx >= 0) {
        setActiveIdx(convIdx);
      } else if (seeded) {
        setConversations((prev) => [...prev, { person: seeded, messages: [] }]);
        setActiveIdx(conversations.length);
      }
      setQuery("");
      setSearchInput("");
    }
  }

  function sendMessage(text) {
    const t = text.trim();
    if (!t) return;
    const now = Date.now();
    // quick guard using ref
    if (lastSentRef.current.text === t && now - lastSentRef.current.ts < 1000) return;
    // update conversations but double-check against last message in the active convo
    setConversations((prev) => {
      const next = [...prev];
      const conv = next[activeIdx];
      const lastMsg = conv?.messages?.[conv.messages.length - 1];
      if (lastMsg && lastMsg.sender === ME_ID && lastMsg.text === t) {
        const lastTs = new Date(lastMsg.ts).getTime();
        if (now - lastTs < 2000) {
          // duplicate within 2s, ignore
          return prev;
        }
      }

      const newMsg = {
        id: `${Date.now()}`,
        sender: ME_ID,
        text: t,
        ts: new Date().toISOString(),
      };

      conv.messages = [...conv.messages, newMsg];
      // move conversation to top
      next.splice(activeIdx, 1);
      next.unshift(conv);
      lastSentRef.current = { text: t, ts: now };
      return next;
    });
    setActiveIdx(0);
    // ensure view scrolls to bottom after adding message
    setTimeout(() => scrollToBottomImmediate(), 50);
  }

  const activeConv = conversations[activeIdx] || conversations[0];

  return (
    <div className="w-full h-full border rounded-md overflow-hidden" style={{ borderColor: "var(--fdm-border)" }}>
      {/* Top search bar */}
      <div className="px-4 py-3 border-b flex items-center gap-3" style={{ background: "var(--fdm-surface)", borderColor: "var(--fdm-border)" }}>
        <input
          aria-label="Search people or start chat"
          placeholder="Search people or start chat..."
          className="flex-1 px-3 py-2 rounded-md border"
          style={{ borderColor: "var(--fdm-border-strong)", background: "var(--fdm-bg)", color: "var(--fdm-text)" }}
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
            setQuery(e.target.value);
          }}
          onKeyDown={handleSearchKeyDown}
        />
        <div className="text-sm text-[var(--fdm-text-muted)]">Press Enter to open/start</div>
      </div>

      <div className="flex h-full">
        {/* Left column */}
        <div className="w-96 min-w-[280px] border-r overflow-auto" style={{ borderColor: "var(--fdm-border)" }}>
          {filtered.length === 0 ? (
            <div className="p-4 text-sm text-[var(--fdm-text-muted)]">No chats</div>
          ) : (
            filtered.map((c) => {
              const last = c.messages[c.messages.length - 1];
              const idx = conversations.indexOf(c);
              return (
                <button
                  key={c.person.id}
                  onClick={() => setActiveIdx(idx)}
                  className={`w-full text-left flex items-center gap-3 px-4 py-3 hover:bg-[rgba(255,255,255,0.02)] ${idx === activeIdx ? "bg-[rgba(215,255,0,0.05)]" : ""}`}
                  style={{ borderBottom: "1px solid var(--fdm-border)" }}
                >
                  <img src={c.person.avatar} alt={c.person.name} className="w-10 h-10 rounded-full object-cover" />
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center">
                      <div className="font-medium text-[var(--fdm-text)]">{c.person.name}</div>
                      <div className="text-xs text-[var(--fdm-text-soft)]">{last ? formatTime(last.ts) : ""}</div>
                    </div>
                    <div className="text-sm text-[var(--fdm-text-muted)] truncate whitespace-nowrap overflow-hidden">
                      {last ? last.text : <span className="italic text-[var(--fdm-text-soft)]">No messages yet</span>}
                    </div>
                  </div>
                </button>
              );
            })
          )}
        </div>

        {/* Main */}
        <div className="flex-1 flex flex-col" style={{ background: "var(--fdm-bg)" }}>
          {/* Header */}
          {activeConv && (
            <div className="flex items-center gap-4 px-6 py-4 border-b" style={{ borderColor: "var(--fdm-border)" }}>
              <img src={activeConv.person.avatar} alt={activeConv.person.name} className="w-12 h-12 rounded-full object-cover" />
              <div>
                <div className="font-semibold text-[var(--fdm-text)]">{activeConv.person.name}</div>
                <div className="text-sm text-[var(--fdm-text-soft)]">Conversation</div>
              </div>
            </div>
          )}

          {/* Thread */}
          <div
            ref={threadRef}
            className="flex-1 overflow-auto px-6 py-4 space-y-4"
            id="message-thread"
            style={{ paddingBottom: "180px", scrollBehavior: "smooth" }}
          >
            {activeConv && activeConv.messages.length === 0 && (
              <div className="text-sm text-[var(--fdm-text-muted)] italic">No messages. Start the conversation below.</div>
            )}

            {activeConv &&
              activeConv.messages.map((m) => {
                const mine = m.sender === ME_ID;
                return (
                  <div key={m.id} className={`flex ${mine ? "justify-end" : "justify-start"}`}>
                    <div className={`max-w-[70%] px-4 py-2 rounded-lg ${mine ? "bg-[var(--fdm-lime)] text-black" : "bg-[var(--fdm-surface)] text-[var(--fdm-text)]"}`}>
                      <div className="whitespace-pre-wrap">{m.text}</div>
                      <div className={`text-[10px] mt-1 text-right ${mine ? "text-black" : "text-[var(--fdm-text-soft)]"}`}>{formatTime(m.ts)}</div>
                    </div>
                  </div>
                );
              })}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div ref={inputContainerRef} className="sticky bottom-0 z-10 px-6 pt-3 pb-4 border-t bg-[var(--fdm-bg)]" style={{ borderColor: "var(--fdm-border)" }}>
            <MessageInput onSend={sendMessage} />
          </div>
        </div>
      </div>
    </div>
  );
}

function MessageInput({ onSend }) {
  const [val, setVal] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);

  function handleKeyDown(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (val.trim()) {
        onSend(val);
        setVal("");
        // reset height
        if (inputRef.current) inputRef.current.style.height = "auto";
      }
    }
  }

  function handleInput(e) {
    const ta = e.target;
    ta.style.height = "auto";
    ta.style.height = Math.min(ta.scrollHeight, 160) + "px";
    setVal(ta.value);
  }

  return (
    <div className="flex items-center gap-3">
      <div className="flex-1 flex items-stretch" style={{ border: "1px solid var(--fdm-border)", borderRadius: "8px", overflow: "hidden", background: "var(--fdm-bg)" }}>
        <textarea
          ref={inputRef}
          value={val}
          onChange={handleInput}
          onKeyDown={handleKeyDown}
          placeholder="Write a message and press Enter to send..."
          className="flex-1 px-3 py-2 resize-none bg-transparent outline-none"
          rows={2}
          style={{ minHeight: "48px", maxHeight: "160px", border: 0, color: "var(--fdm-text)" }}
        />
        <button
          onClick={() => {
            if (val.trim()) {
              onSend(val);
              setVal("");
              if (inputRef.current) inputRef.current.style.height = "auto";
            }
          }}
          className="px-4 py-2"
          style={{ borderLeft: "1px solid var(--fdm-border)", background: "var(--fdm-lime)", color: "black" }}
        >
          Send
        </button>
      </div>
    </div>
  );
}