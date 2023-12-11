'use client';
import Link from 'next/link';
import {usePathname} from 'next/navigation';

const links = [
    {name: 'Etusivu', href: '/dashboard'},
    {name: 'Tämä päivä', href: '/dashboard/currentday'},
    {name: 'Seur. Päivä', href: '/dashboard/nextday'},
    {name: 'Valittu tunti', href: '/dashboard/selecthour'},
];

export default function NavLinks(){
    const pathname = usePathname();
    return (
        <>
        {links.map((link) => {
            return (
                <Link
                    key={link.name}
                    href={link.href}
                    className={'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 text-blue-600 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3'}
                ><p className="hidden md:block">{link.name}</p></Link>
            );
        })}
        </>
    );
}