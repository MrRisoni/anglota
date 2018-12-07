export class SegmentMdl {
    id: number;
    from: string;
    to: string;
    fromTitle: string;
    toTitle: string;
    legId: number;

    constructor(args) {
       this.id = args.id;
       this.from = args.from;
       this.to = args.to;
       this.fromTitle = args.fromTitle;
       this.toTitle = args.toTitle;
       this.legId = args.legId;
    }
}
