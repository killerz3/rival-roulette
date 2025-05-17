import React from 'react';
import { Button } from '@/components/ui/button';

type RoleSelectorProps = {
  roles: string[];
  selectedRole: string;
  onRoleChange: (role: string) => void;
};

export function RoleSelector({ roles, selectedRole, onRoleChange }: RoleSelectorProps) {
  return (
    <div className="flex flex-wrap justify-center items-center pb-8 pt-2 gap-3">
      <Button
        key="ALL"
        onClick={() => onRoleChange('ALL')}
        className={`rounded-full text-sm px-6 py-1.5 min-w-[150px] ${
          selectedRole === 'ALL'
            ? 'bg-white text-gray-900 font-medium'
            : 'bg-black/50 text-white hover:bg-black/70 font-medium border border-white/10'
        }`}
      >
        All Characters
      </Button>
      
      {roles.map((role) => (
        <Button
          key={role}
          onClick={() => onRoleChange(role)}
          className={`rounded-full text-sm px-6 py-1.5 min-w-[120px] ${
            selectedRole === role
              ? 'bg-white text-gray-900 font-medium'
              : 'bg-black/50 text-white hover:bg-black/70 font-medium border border-white/10'
          }`}
        >
          {role}
        </Button>
      ))}
    </div>
  );
} 