import Home from '@/app/page';
import { BookCheck, File, FileVideo, LayoutDashboard } from 'lucide';
import React from 'react';

const ICONS = {
  dashboard: LayoutDashboard,
  pdfs: File,
  videos: FileVideo,
  quizzes: BookCheck
}

function Icon({icon}:{icon:string}) {
  return <div>
  </div>;
}

export default Icon;
