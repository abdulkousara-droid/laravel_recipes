import { Link } from '@inertiajs/react';

interface Props {
    links: Array<{
        url: string | null;
        label: string;
        active: boolean;
    }>;
}

const Pagination = ({ links }: Props) => {
    if (!links || links.length <= 3) {
        return null;
    }

    return (
        <div className="d-flex justify-content-around col-12 text-center">
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    {links.map((link: any, index: number) => {
                        const isPrev = link.label.includes('Previous');
                        const isNext = link.label.includes('Next');

                        return (
                            <li
                                key={index}
                                className={`page-item ${link.active ? 'active' : ''} ${!link.url ? 'disabled' : ''}`}
                            >
                                <Link
                                    className="page-link"
                                    href={link.url || '#'}
                                    aria-label={
                                        isPrev
                                            ? 'Previous'
                                            : isNext
                                              ? 'Next'
                                              : undefined
                                    }
                                >
                                    {isPrev ? (
                                        <span aria-hidden="true">&laquo;</span>
                                    ) : isNext ? (
                                        <span aria-hidden="true">&raquo;</span>
                                    ) : (
                                        link.label
                                    )}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </div>
    );
};

export default Pagination;
