export const stats = [
    { id: 1, label: "Approved Visits", value: 3, icon: "check-circle" },
    { id: 2, label: "Active virtual visits", value: 12, icon: "layers" },
    { id: 3, label: "Furniture catalog", value: 654, icon: "sofa" },
    { id: 4, label: "Upcoming meetings", value: 12, icon: "calendar" },
  ];
  
  export const visits = [
    {
      id: 34115,
      client: "Youssef Alami",
      propertyType: "Apartment",
      address: "12 Rue de la Paix, Rabat 10000, Morocco",
      rooms: ["Living Room", "Bedroom", "Kitchen"],
      status: "Not Started",
      assignees: [
        { id: 1, name: "Ahmed", avatar: "https://i.pravatar.cc/40?img=11" },
      ],
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=200&h=150&fit=crop",
    },
    {
      id: 34116,
      client: "Layla El Idrissi",
      propertyType: "Apartment",
      address: "45 Rue des Oliviers, Casablanca 20200, Morocco",
      rooms: ["Kitchen"],
      status: "Pending",
      assignees: [
        { id: 2, name: "Sara", avatar: "https://i.pravatar.cc/40?img=5" },
        { id: 3, name: "Karim", avatar: "https://i.pravatar.cc/40?img=12" },
      ],
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=200&h=150&fit=crop",
    },
    {
      id: 34117,
      client: "Ahmed Benali",
      propertyType: "Villa",
      address: "87 Avenue Hassan II, Marrakesh 40000, Morocco",
      rooms: ["Living Room"],
      status: "Completed",
      assignees: [
        { id: 4, name: "Nadia", avatar: "https://i.pravatar.cc/40?img=9" },
        { id: 5, name: "Omar", avatar: "https://i.pravatar.cc/40?img=15" },
      ],
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=200&h=150&fit=crop",
    },
    {
      id: 34118,
      client: "Youssef Alami",
      propertyType: "Apartment",
      address: "12 Rue de la Paix, Rabat 10000, Morocco",
      rooms: ["Living Room", "Bedroom", "Kitchen"],
      status: "Scanning",
      assignees: [
        { id: 6, name: "Hind", avatar: "https://i.pravatar.cc/40?img=20" },
        { id: 7, name: "Yassir", avatar: "https://i.pravatar.cc/40?img=17" },
      ],
      image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=200&h=150&fit=crop",
    },
    {
      id: 34119,
      client: "Youssef Alami",
      propertyType: "Apartment",
      address: "12 Rue de la Paix, Rabat 10000, Morocco",
      rooms: ["Living Room", "Bedroom", "Kitchen"],
      status: "Scanning",
      assignees: [
        { id: 8, name: "Aya", avatar: "https://i.pravatar.cc/40?img=25" },
        { id: 9, name: "Mehdi", avatar: "https://i.pravatar.cc/40?img=13" },
        { id: 10, name: "Zineb", avatar: "https://i.pravatar.cc/40?img=30" },
      ],
      image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=200&h=150&fit=crop",
    },
    {
      id: 34120,
      client: "Youssef Alami",
      propertyType: "Apartment",
      address: "12 Rue de la Paix, Rabat 10000, Morocco",
      rooms: ["Living Room", "Bedroom", "Kitchen"],
      status: "Completed",
      assignees: [
        { id: 11, name: "Rania", avatar: "https://i.pravatar.cc/40?img=32" },
      ],
      image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=200&h=150&fit=crop",
    },
  ];
  
  export const meetings = [
    {
      id: 1,
      title: "Design Review – Youssef Alami",
      date: "2026-06-18T10:00:00",
      client: "Youssef Alami",
      type: "Virtual",
    },
    {
      id: 2,
      title: "Catalog Presentation – Layla El Idrissi",
      date: "2026-06-19T14:00:00",
      client: "Layla El Idrissi",
      type: "In-person",
    },
  ];