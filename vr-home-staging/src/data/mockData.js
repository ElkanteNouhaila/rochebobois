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
  
  export const features = [
    {
      id: 1,
      title: "3D Virtual Staging",
      description: "Transform empty rooms into beautifully furnished spaces with photorealistic 3D renders.",
      icon: "box",
    },
    {
      id: 2,
      title: "Style Catalog",
      description: "Browse hundreds of premium furniture pieces from the Roche Bobois collection.",
      icon: "sofa",
    },
    {
      id: 3,
      title: "Client Collaboration",
      description: "Share interactive previews with clients and gather feedback in real time.",
      icon: "users",
    },
  ];

  export const styles = [
    {
      id: 1,
      name: "Modern Minimalist",
      description: "Clean lines, neutral tones, and understated elegance.",
      image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=400&h=300&fit=crop",
    },
    {
      id: 2,
      name: "Contemporary Luxury",
      description: "Rich textures, bold accents, and designer statement pieces.",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop",
    },
    {
      id: 3,
      name: "Scandinavian Warmth",
      description: "Light woods, soft fabrics, and a cozy inviting atmosphere.",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
    },
  ];

  export const projects = [
    {
      id: 1,
      name: "Rabat Apartment – Living Room",
      client: "Youssef Alami",
      style: "Modern Minimalist",
      status: "In Progress",
      image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&h=400&fit=crop",
      rooms: 3,
      updatedAt: "2026-06-17",
    },
    {
      id: 2,
      name: "Casablanca Penthouse – Master Suite",
      client: "Layla El Idrissi",
      style: "Contemporary Luxury",
      status: "Completed",
      image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=600&h=400&fit=crop",
      rooms: 2,
      updatedAt: "2026-06-15",
    },
  ];

  export const catalogCategories = [
    {
      id: 1,
      name: "Chairs",
      itemCount: 5,
      image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400&h=280&fit=crop",
    },
    {
      id: 2,
      name: "Chairs",
      itemCount: 5,
      image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400&h=280&fit=crop",
    },
    {
      id: 3,
      name: "Bed",
      itemCount: 0,
      image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=280&fit=crop",
    },
    {
      id: 4,
      name: "Desk",
      itemCount: 5,
      image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=400&h=280&fit=crop",
    },
    {
      id: 5,
      name: "Sofa chair",
      itemCount: 5,
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=280&fit=crop",
    },
    {
      id: 6,
      name: "Lamps",
      itemCount: 5,
      image: "https://images.unsplash.com/photo-1507473888944-1857a2f4ec0a?w=400&h=280&fit=crop",
    },
    {
      id: 7,
      name: "Sofa",
      itemCount: 5,
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=280&fit=crop",
    },
    {
      id: 8,
      name: "buffet cabinet",
      itemCount: 5,
      image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=400&h=280&fit=crop",
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