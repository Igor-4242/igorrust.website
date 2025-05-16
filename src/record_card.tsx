import * as record from "./record"
import * as types from "./types"

export interface RecordCardProps {
    logo: types.FilePath,
    what: record.Record,
    when: record.Record,
    where: record.Record,
    how: record.Record,
};

export function RecordCard({
    logo, what, when, where, how
}: RecordCardProps) {
    return <div className="flex flex-col gap-2">
        <img src={logo} alt={logo} />
        <div className="flex flex-row">
            <h2>what:</h2>
            {
                record.match(
                    what,
                    a => <div>A: {a}</div>,
                    a => <div>B: {a}</div>,
                )
            }
        </div>
        <div className="flex flex-row">
            <h2>when:</h2>
            {
                record.match(
                    when,
                    a => <div>A: {a}</div>,
                    a => <div>B: {a}</div>,
                )
            }
        </div>
        <div className="flex flex-row">
            <h2>where:</h2>
            {
                record.match(
                    where,
                    a => <div>A: {a}</div>,
                    a => <div>B: {a}</div>,
                )
            }
        </div>
        <div className="flex flex-row">
            <h2>how:</h2>
            {
                record.match(
                    how,
                    a => <div>A: {a}</div>,
                    a => <div>B: {a}</div>,
                )
            }
        </div>
    </div>
}