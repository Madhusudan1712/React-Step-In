import React, { useState, useRef } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

// Example items, can be replaced with props or API data
const initialLeftItems = [
    { id: 1, label: "Item 1" },
    { id: 2, label: "Item 2" },
    { id: 3, label: "Item 3" },
];
const initialRightItems = [
    { id: 4, label: "Item 4" },
    { id: 5, label: "Item 5" },
];

export default function DragAndDrop() {
    const [leftItems, setLeftItems] = useState(initialLeftItems);
    const [rightItems, setRightItems] = useState(initialRightItems);
    const [draggedItem, setDraggedItem] = useState<null | { id: number; label: string }>(null);
    const [dragOverBox, setDragOverBox] = useState<"left" | "right" | null>(null);
    const dragSource = useRef<"left" | "right" | null>(null);

    // Drag event handlers
    const handleDragStart = (item: { id: number; label: string }, source: "left" | "right") => {
        setDraggedItem(item);
        dragSource.current = source;
    };

    const handleDragEnd = () => {
        setDraggedItem(null);
        setDragOverBox(null);
        dragSource.current = null;
    };

    const handleDragOver = (e: React.DragEvent, box: "left" | "right") => {
        e.preventDefault();
        setDragOverBox(box);
    };

    const handleDrop = (box: "left" | "right") => {
        if (!draggedItem || dragSource.current === box) {
            setDragOverBox(null);
            return;
        }
        if (dragSource.current === "left" && box === "right") {
            setLeftItems((items) => items.filter((i) => i.id !== draggedItem.id));
            setRightItems((items) => [...items, draggedItem]);
        } else if (dragSource.current === "right" && box === "left") {
            setRightItems((items) => items.filter((i) => i.id !== draggedItem.id));
            setLeftItems((items) => [...items, draggedItem]);
        }
        setDragOverBox(null);
        setDraggedItem(null);
        dragSource.current = null;
    };

    // Helper to render draggable items
    const renderItems = (items: { id: number; label: string }[], source: "left" | "right") =>
        items.map((item) => (
            <Box
                key={item.id}
                draggable
                onDragStart={() => handleDragStart(item, source)}
                onDragEnd={handleDragEnd}
                sx={{
                    mb: 2,
                    p: 2,
                    borderRadius: 2,
                    backgroundColor:
                        draggedItem && draggedItem.id === item.id
                            ? "primary.light"
                            : "background.paper",
                    boxShadow: 2,
                    cursor: "grab",
                    opacity: draggedItem && draggedItem.id === item.id ? 0.5 : 1,
                    border: "2px solid",
                    borderColor:
                        draggedItem && draggedItem.id === item.id
                            ? "primary.main"
                            : "transparent",
                    transition: "background 0.2s, border 0.2s, opacity 0.2s",
                }}
            >
                <Typography variant="body1">{item.label}</Typography>
            </Box>
        ));

    return (
        <Box>
            <Typography variant="h2" sx={{ p: 2 }}>
                Drag and Drop
            </Typography>
            <Box
                sx={{
                    height: "100vh",
                    width: "100vw",
                    display: "flex",
                    alignContent: "space-between",
                    gap: 2,
                    alignItems: "center",
                    backgroundColor: "#f5f5f5",
                }}
            >
                {/* Left Box */}
                <Box
                    onDragOver={(e) => handleDragOver(e, "left")}
                    onDrop={() => handleDrop("left")}
                    onDragLeave={() => setDragOverBox(null)}
                    sx={{
                        height: "60vh",
                        width: "49vw",
                        p: 2,
                        backgroundColor:
                            dragOverBox === "left" ? "#e3f2fd" : "#ad131311",
                        border: dragOverBox === "left" ? "2px dashed #1976d2" : "2px solid transparent",
                        borderRadius: 3,
                        transition: "background 0.2s, border 0.2s",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "stretch",
                        overflowY: "auto",
                    }}
                >
                    <Typography variant="h5" sx={{ mb: 2 }}>
                        Left Box
                    </Typography>
                    {leftItems.length === 0 ? (
                        <Typography color="text.secondary">No items</Typography>
                    ) : (
                        renderItems(leftItems, "left")
                    )}
                </Box>
                {/* Right Box */}
                <Box
                    onDragOver={(e) => handleDragOver(e, "right")}
                    onDrop={() => handleDrop("right")}
                    onDragLeave={() => setDragOverBox(null)}
                    sx={{
                        height: "60vh",
                        width: "49vw",
                        p: 2,
                        backgroundColor:
                            dragOverBox === "right" ? "#fff3e0" : "#c0873d11",
                        border: dragOverBox === "right" ? "2px dashed #ff9800" : "2px solid transparent",
                        borderRadius: 3,
                        transition: "background 0.2s, border 0.2s",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "stretch",
                        overflowY: "auto",
                    }}
                >
                    <Typography variant="h5" sx={{ mb: 2 }}>
                        Right Box
                    </Typography>
                    {rightItems.length === 0 ? (
                        <Typography color="text.secondary">No items</Typography>
                    ) : (
                        renderItems(rightItems, "right")
                    )}
                </Box>
            </Box>
        </Box>
    );
}